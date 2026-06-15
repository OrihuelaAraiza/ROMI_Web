"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getToken } from "@/lib/auth";
import { apiFetch } from "@/lib/api";
import { useRealtime } from "@/hooks/useRealtime";
import { useFormatter, useTranslations } from "next-intl";
import { ROMI_CONTACT } from "@/lib/contact";

type ChatMessage = { from: "user" | "bot"; text: string };
type ConnectionState = "idle" | "connecting" | "connected" | "fallback";

function ChatPageInner() {
  const t = useTranslations("chat");
  const format = useFormatter();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const [typing, setTyping] = useState(false);
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle");
  const searchParams = useSearchParams();
  const appointmentId = searchParams?.get("appointmentId") || null;
  const [userId, setUserId] = useState<string | null>(null);
  const [appointmentInput, setAppointmentInput] = useState("");
  const fallbackMessage = t("fallbackMessage");
  const offlineReply = t("offlineReply");

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
    const configuredBase =
      process.env.NEXT_PUBLIC_WS_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_URL;

    if (!configuredBase) {
      setConnectionState("fallback");
      setMessages([{ from: "bot", text: fallbackMessage }]);
      return;
    }

    const wsBase = configuredBase.replace(/^http/, "ws");

    const url = new URL(`${wsBase}/chat`);

    const token = getToken();
    if (token) url.searchParams.set("token", token);

    setConnectionState("connecting");

    const ws = new WebSocket(url.toString());
    wsRef.current = ws;

    ws.onopen = () => setConnectionState("connected");
    ws.onclose = () => {
      setConnectionState("fallback");
      setTyping(false);
      setMessages((current) => current.length ? current : [{ from: "bot", text: fallbackMessage }]);
    };
    ws.onerror = () => {
      setConnectionState("fallback");
      setTyping(false);
      setMessages((current) => current.length ? current : [{ from: "bot", text: fallbackMessage }]);
    };

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
  }, [fallbackMessage]);

  const send = () => {
    const text = input.trim();
    const ws = wsRef.current;

    if (!text) {
      return;
    }

    if (!ws || ws.readyState !== WebSocket.OPEN || connectionState !== "connected") {
      setMessages((p) => [...p, { from: "user", text }, { from: "bot", text: offlineReply }]);
      setInput("");
      setConnectionState("fallback");
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
    <main className="romi-page overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-0 sm:px-4 space-y-5">
        <header className="romi-page-header">
          <h1 className="font-fredoka-one text-3xl text-primary">{t("title")}</h1>
          <p className="mt-1 text-sm text-[var(--text-body)]">{t("subtitle")}</p>
        </header>

        {connectionState !== "connected" && (
          <section className="romi-panel flex flex-col gap-4 border-[var(--surface-card-border-soft)] bg-[var(--surface-card-soft)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-fredoka-one text-xl text-primary">{t("fallbackTitle")}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--text-body)]">{fallbackMessage}</p>
            </div>
            <a
              href={ROMI_CONTACT.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="romi-action shrink-0"
            >
              {t("fallbackCta")}
            </a>
          </section>
        )}

        {appointmentId && (
          <section className="romi-panel space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{t("appointment")}</h2>
              <span className="text-xs text-muted-foreground">ID: {appointmentId}</span>
            </div>

            <div className="h-60 overflow-y-auto rounded-2xl border-2 border-[var(--surface-card-border-soft)] bg-[var(--surface-alt)] p-3">
              {realtimeThread.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  {t("empty")}
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
                      {msg.authorId === userId ? t("you") : t("participant")} ·{" "}
                      {format.dateTime(new Date(msg.createdAt), {hour: "numeric", minute: "2-digit"})}
                    </p>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                className="romi-field min-w-0 flex-1"
                placeholder={t("appointmentPlaceholder")}
                value={appointmentInput}
                onChange={(e) => setAppointmentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendAppointmentMessage()}
              />
              <button
                className="romi-action"
                onClick={sendAppointmentMessage}
              >
                {t("send")}
              </button>
            </div>
          </section>
        )}

        <section className="romi-panel h-[55vh] overflow-y-auto bg-[var(--surface-alt)]">
          {messages.length === 0 && (
            <div className="grid h-full place-items-center text-center text-sm text-[var(--text-muted)]">
              {connectionState === "connecting" ? t("loading") : t("empty")}
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`my-2 flex ${
                m.from === "user" ? "justify-end" : "justify-start"
              } items-end`}
            >
              {m.from === "bot" && (
                <div className="mr-2 w-8 h-8 rounded-full overflow-hidden border bg-white flex-shrink-0">
                  <Image src="/images/asistent.webp" alt="ROMI" width={32} height={32} />
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
                <Image src="/images/asistent.webp" alt="ROMI" width={32} height={32} />
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
            placeholder={t("placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button
            className="romi-action"
            onClick={send}
          >
            {t("send")}
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
