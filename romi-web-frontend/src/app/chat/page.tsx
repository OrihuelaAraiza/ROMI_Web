"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getToken } from "@/lib/auth";
import { apiFetch } from "@/lib/api";
import { useRealtime } from "@/hooks/useRealtime";

type ChatMessage = { from: "user" | "bot"; text: string };

function ChatPageInner() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const [typing, setTyping] = useState(false);
  const searchParams = useSearchParams();
  const appointmentId = searchParams?.get("appointmentId") || null;
  const [userId, setUserId] = useState<string | null>(null);
  const [appointmentInput, setAppointmentInput] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const me = (await apiFetch("/auth/me", { method: "GET" })) as { sub?: string };
        setUserId(me?.sub || null);
      } catch {}
    })();
  }, []);

  const { socket, chatMessages } = useRealtime({
    userId,
    appointmentIds: appointmentId ? [appointmentId] : [],
  });

  const realtimeThread = appointmentId ? chatMessages[appointmentId] ?? [] : [];

  useEffect(() => {
    const apiBase =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:3001";

    const wsBase = process.env.NEXT_PUBLIC_WS_URL || apiBase.replace(/^http/, "ws");

    const url = new URL(`${wsBase}/chat`);

    const token = getToken();
    if (token) url.searchParams.set("token", token);

    console.log("WS_URL final:", url.toString());

    const ws = new WebSocket(url.toString());
    wsRef.current = ws;

    ws.onopen = () => console.log("WS connected:", url.toString());
    ws.onclose = (e) => console.log("WS closed", e.code, e.reason);
    ws.onerror = (e) => console.log("WS error", e);

    ws.onmessage = (ev) => {
      try {
        const payload = JSON.parse(typeof ev.data === "string" ? ev.data : String(ev.data)) as {
          type?: string;
          text?: string;
          on?: boolean;
        };
        if (payload.type === "bot_message") {
          setMessages((p) => [...p, { from: "bot", text: payload.text ?? "" }]);
        } else if (payload.type === "typing") {
          setTyping(!!payload.on);
        }
      } catch (err) {
        console.error("WS parse error", err);
      }
    };

    return () => {
      try {
        ws.close();
      } catch {}
    };
  }, []);

  const send = () => {
    const text = input.trim();
    const ws = wsRef.current;

    if (!text || !ws || ws.readyState !== WebSocket.OPEN) {
      console.warn("WS no abierto aún");
      return;
    }

    setMessages((p) => [...p, { from: "user", text }]);
    ws.send(JSON.stringify({ type: "user_message", text }));
    setInput("");
  };

  const sendAppointmentMessage = () => {
    if (!appointmentId || !socket || !appointmentInput.trim()) return;
    socket.emit("chat:message", {
      appointmentId,
      text: appointmentInput.trim(),
    });
    setAppointmentInput("");
  };

  return (
    <main className="romi-page">
      <div className="max-w-3xl mx-auto px-0 sm:px-4 space-y-5">
        <header className="romi-page-header">
          <h1 className="font-fredoka-one text-3xl text-primary">Chat con ROMI</h1>
          <p className="mt-1 text-sm text-[var(--text-body)]">Un espacio claro para conversar y dar seguimiento.</p>
        </header>

        {appointmentId && (
          <section className="romi-panel space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Chat de la cita</h2>
              <span className="text-xs text-muted-foreground">ID: {appointmentId}</span>
            </div>

            <div className="h-60 overflow-y-auto rounded-2xl border-2 border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)] p-3">
              {realtimeThread.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Sin mensajes todavía. Empieza la conversación.
                </p>
              )}

              {realtimeThread.map((msg, idx) => (
                <div
                  key={`${msg.createdAt}-${idx}`}
                  className={`my-2 flex ${
                    msg.authorId === userId ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl max-w-[80%] ${
                      msg.authorId === userId
                        ? "bg-primary text-primary-foreground"
                        : "bg-[var(--surface-card)] text-[var(--text-primary)]"
                    }`}
                  >
                    <p className="text-xs text-muted-foreground">
                      {msg.authorId === userId ? "Tú" : "Participante"} ·{" "}
                      {new Date(msg.createdAt).toLocaleTimeString()}
                    </p>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                className="romi-field min-w-0 flex-1"
                placeholder="Mensaje para la cita"
                value={appointmentInput}
                onChange={(e) => setAppointmentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendAppointmentMessage()}
              />
              <button
                className="romi-action"
                onClick={sendAppointmentMessage}
              >
                Enviar
              </button>
            </div>
          </section>
        )}

        <section className="romi-panel h-[55vh] overflow-y-auto bg-[var(--surface-alt)]">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`my-2 flex ${
                m.from === "user" ? "justify-end" : "justify-start"
              } items-end`}
            >
              {m.from === "bot" && (
                <div className="mr-2 w-8 h-8 rounded-full overflow-hidden border bg-white flex-shrink-0">
                  <Image src="/images/asistent.png" alt="ROMI" width={32} height={32} />
                </div>
              )}
              <div
                className={`px-3 py-2 rounded-xl max-w-[80%] ${
                  m.from === "user"
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-[var(--surface-card-border-soft)] bg-[var(--surface-card)] text-[var(--text-primary)]"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="my-2 flex justify-start items-end">
              <div className="mr-2 w-8 h-8 rounded-full overflow-hidden border bg-white flex-shrink-0">
                <Image src="/images/asistent.png" alt="ROMI" width={32} height={32} />
              </div>
              <div className="px-3 py-2 rounded-xl max-w-[80%] bg-white border">
                <span className="inline-block animate-pulse">...</span>
              </div>
            </div>
          )}
        </section>

        <div className="flex gap-2">
          <input
            className="romi-field min-w-0 flex-1"
            placeholder="Escribe tu mensaje…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button
            className="romi-action"
            onClick={send}
          >
            Enviar
          </button>
        </div>
      </div>
    </main>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={null}>
      <ChatPageInner />
    </Suspense>
  );
}
