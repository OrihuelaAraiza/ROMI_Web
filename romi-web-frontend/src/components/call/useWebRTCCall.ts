"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getToken } from "@/lib/auth";
import { errMsg } from "@/lib/errors";

type Role = "doctor" | "patient";

type Incoming =
  | { type: "system"; text: string }
  | { type: "sdp-offer"; sdp: RTCSessionDescriptionInit }
  | { type: "sdp-answer"; sdp: RTCSessionDescriptionInit }
  | { type: "ice-candidate"; candidate: RTCIceCandidateInit }
  | { type: "alert"; level: "info" | "warn" | "critical"; text: string }
  | { type: "details"; diagnosis: string; prescription: string[]; followUp: string }
  | { type: "call_link"; url: string; from?: Role }
  | { type: "ready"; from?: Role };

export function useWebRTCCall(appointmentId: string, role: Role) {
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [events, setEvents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // 👇 nuevos estados para el panel
  const [callLink, setCallLink] = useState<string | null>(null);
  const [patientReady, setPatientReady] = useState(false);

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  const iceServers = useMemo<RTCConfiguration>(() => {
    const stunUrl =
      process.env.NEXT_PUBLIC_RTC_STUN || "stun:stun.l.google.com:19302";

    const turnUrls = process.env.NEXT_PUBLIC_RTC_TURN_URLS;
    const turnUser = process.env.NEXT_PUBLIC_RTC_TURN_USERNAME;
    const turnPass = process.env.NEXT_PUBLIC_RTC_TURN_PASSWORD;

    const servers: RTCIceServer[] = [{ urls: stunUrl }];

    if (turnUrls && turnUser && turnPass) {
      servers.push({
        urls: turnUrls.split(",").map((u) => u.trim()),
        username: turnUser,
        credential: turnPass,
      });
    }

    return { iceServers: servers };
  }, []);

  const push = (t: string) => setEvents((p) => [...p, t]);

  const hardCleanup = () => {
    try {
      if (wsRef.current) {
        wsRef.current.onopen = null;
        wsRef.current.onclose = null;
        wsRef.current.onmessage = null;
        wsRef.current.onerror = null;
        try { wsRef.current.close(); } catch {}
      }
    } catch {}
    wsRef.current = null;

    try {
      if (pcRef.current) {
        pcRef.current.getSenders().forEach((s) => s.track?.stop());
        pcRef.current.onicecandidate = null;
        pcRef.current.ontrack = null;
        pcRef.current.onconnectionstatechange = null;
        try { pcRef.current.close(); } catch {}
      }
    } catch {}
    pcRef.current = null;

    try {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((t) => t.stop());
      }
    } catch {}
    localStreamRef.current = null;

    setLocalStream(null);
    setRemoteStream(null);
  };

  useEffect(() => {
    if (!appointmentId) {
      setError("No se encontró el ID de la cita.");
      return;
    }

    setError(null);
    hardCleanup();

    // reset panel states
    setCallLink(null);
    setPatientReady(false);

    let cancelled = false;

    const start = async () => {
      try {
        console.log("[RTC] Iniciando llamada para", appointmentId, "como", role);

        if (pcRef.current) {
          console.log("[RTC] PeerConnection ya existe, no se crea otro");
          return;
        }

        const pc = new RTCPeerConnection(iceServers);
        pcRef.current = pc;

        pc.onicecandidate = (e) => {
          if (e.candidate && wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(
              JSON.stringify({ type: "ice-candidate", candidate: e.candidate })
            );
          }
        };

        pc.ontrack = (e) => {
          if (!cancelled) setRemoteStream(e.streams[0]);
        };

        pc.onconnectionstatechange = () => {
          const state = pc.connectionState;
          console.log("[RTC] connectionState:", state);
          if (state === "failed") {
            setError(
              "No se pudo establecer la conexión de videollamada. Puedes reintentar o continuar por chat."
            );
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (cancelled || pc.signalingState === "closed") {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        stream.getTracks().forEach((t) => pc.addTrack(t, stream));
        localStreamRef.current = stream;
        setLocalStream(stream);

        // WS base
        let base: string;

        if (process.env.NEXT_PUBLIC_CALL_WS_URL) {
          base = process.env.NEXT_PUBLIC_CALL_WS_URL;
        } else if (typeof window !== "undefined") {
          const host = window.location.hostname;

          if (host.endsWith(".vercel.app")) {
            base = "wss://romiweb.onrender.com/call";
          } else {
            const proto = window.location.protocol === "https:" ? "wss" : "ws";
            base =
              process.env.NEXT_PUBLIC_WS_URL?.replace("/chat", "/call") ??
              `${proto}://${window.location.host}/call`;
          }
        } else {
          base =
            process.env.NEXT_PUBLIC_WS_URL?.replace("/chat", "/call") ??
            "ws://localhost:3001/call";
        }

        const token = getToken();
        const url = new URL(base);
        url.searchParams.set("aid", appointmentId);
        url.searchParams.set("role", role);
        if (token) url.searchParams.set("token", token);

        const ws = new WebSocket(url.toString());
        wsRef.current = ws;

        if (role === "doctor") {
          const dc = pc.createDataChannel("data");
          dcRef.current = dc;
          dc.onmessage = (e) => {
            try {
              const m = JSON.parse(e.data);
              if (m?.type) push(`DC: ${m.type}`);
            } catch {}
          };
        }

        ws.onopen = async () => {
          push("Conectado a señalización");

          if (role === "doctor") {
            if (pc.signalingState === "closed") return;
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            ws.send(JSON.stringify({ type: "sdp-offer", sdp: offer }));
          }
        };

        ws.onerror = (ev) => {
          console.error("CALL WS error:", ev);
        };

        ws.onclose = (e) => {
          if (!cancelled) {
            setError(
              `Conexión cerrada (${e.code})${e.reason ? ": " + e.reason : ""}`
            );
          }
        };

        ws.onmessage = async (ev) => {
          const msg = JSON.parse(ev.data) as Incoming;

          if (msg.type === "system") {
            push(msg.text);
            if (/no autorizado/i.test(msg.text)) setError(msg.text);
          }

          if (msg.type === "sdp-offer") {
            if (pc.signalingState === "closed") return;
            await pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            ws.send(JSON.stringify({ type: "sdp-answer", sdp: answer }));
          }

          if (msg.type === "sdp-answer") {
            if (pc.signalingState === "closed") return;
            await pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
          }

          if (msg.type === "ice-candidate") {
            try {
              await pc.addIceCandidate(new RTCIceCandidate(msg.candidate));
            } catch (err) {
              console.warn("Error al agregar ICE", err);
            }
          }

          if (msg.type === "alert") {
            push(`Alerta: ${msg.level.toUpperCase()} · ${msg.text}`);
          }

          if (msg.type === "details") {
            push(`Detalles: ${msg.diagnosis}`);
          }

          // ✅ NUEVO: link de videollamada
          if (msg.type === "call_link") {
            setCallLink(msg.url);
            push(`Link de videollamada recibido.`);
          }

          // ✅ NUEVO: paciente listo
          if (msg.type === "ready") {
            setPatientReady(true);
            push(`Paciente: listo ✅`);
          }
        };
      } catch (err: unknown) {
        console.error("Error iniciando WebRTC:", err);
        setError(
          errMsg(err, "Ocurrió un error al iniciar la videollamada. Intenta recargar.")
        );
      }
    };

    start();

    return () => {
      cancelled = true;
      hardCleanup();
    };
  }, [appointmentId, role, iceServers]);

  const sendAlert = (level: "info" | "warn" | "critical", text: string) => {
    wsRef.current?.send(JSON.stringify({ type: "alert", level, text }));
  };

  const sendDetails = (diagnosis: string, prescription: string[], followUp: string) => {
    const payload = { type: "details", diagnosis, prescription, followUp };
    const dc = dcRef.current;
    if (dc && dc.readyState === "open") dc.send(JSON.stringify(payload));
    wsRef.current?.send(JSON.stringify(payload));
  };

  // ✅ NUEVO: Doctor envía link
  const sendCallLink = (url: string) => {
    const clean = url.trim();
    if (!clean) return;
    setCallLink(clean); // para que el doctor también lo vea
    wsRef.current?.send(JSON.stringify({ type: "call_link", url: clean, from: role }));
    push("Link enviado al paciente.");
  };

  // ✅ NUEVO: Paciente envía “listo”
  const sendReady = () => {
    setPatientReady(true);
    wsRef.current?.send(JSON.stringify({ type: "ready", from: role }));
    push("Enviando: listo ✅");
  };

  return {
    localStream,
    remoteStream,
    events,
    sendAlert,
    sendDetails,
    error,

    // ✅ lo nuevo
    callLink,
    patientReady,
    sendCallLink,
    sendReady,
  };
}
