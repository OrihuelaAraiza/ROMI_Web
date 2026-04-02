import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, WebSocket } from 'ws';
import * as jwt from 'jsonwebtoken';

type ClientMsg = { type: 'user_message'; text: string };
type BotMsg = { type: 'bot_message'; text: string } | { type: 'typing'; on: boolean };

const ALLOWED_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((o) => o.trim())
  : ['http://localhost:3000', 'http://localhost:3002'];

@WebSocketGateway({ path: '/chat', cors: { origin: ALLOWED_ORIGINS } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: Server;

  private readonly logger = new Logger(ChatGateway.name);

  handleConnection(ws: WebSocket, req?: { url?: string }) {
    const secret = process.env.JWT_SECRET;
    if (secret) {
      try {
        const url = new URL(req?.url ?? '', 'http://localhost');
        const token = url.searchParams.get('token');
        if (!token) {
          ws.close(1008, 'Token requerido');
          return;
        }
        jwt.verify(token, secret);
      } catch {
        ws.close(1008, 'Token inválido');
        return;
      }
    }

    this.logger.log('Cliente conectado');
    this.send(ws, { type: 'bot_message', text: 'Hola, soy ROMI 🩺. ¿En qué puedo ayudarte hoy?' });

    ws.on('message', async (raw) => {
      try {
        const data = JSON.parse(String(raw)) as ClientMsg;
        if (data.type !== 'user_message' || !data.text?.trim()) return;

        this.send(ws, { type: 'typing', on: true });
        const reply = await this.askAzure(data.text.trim());
        this.send(ws, { type: 'typing', on: false });
        this.send(ws, { type: 'bot_message', text: reply });
      } catch (e) {
        this.logger.error('Error procesando mensaje WS', e);
        this.send(ws, { type: 'bot_message', text: 'No pude leer tu mensaje.' });
      }
    });
  }

  handleDisconnect(_: WebSocket) {
    this.logger.log('Cliente desconectado');
  }

  private send(ws: WebSocket, msg: BotMsg) {
    try { ws.send(JSON.stringify(msg)); } catch { /* socket ya cerrado */ }
  }

  private async askAzure(userText: string): Promise<string> {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION ?? '2024-12-01-preview';

    if (!endpoint || !apiKey || !deployment) {
      this.logger.warn('Azure OpenAI no configurado – respuesta de fallback');
      return 'El servicio de chat no está configurado actualmente. Por favor intenta más tarde.';
    }

    const url = `${endpoint}openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

    const body = {
      messages: [
        {
          role: 'system',
          content:
            'Eres ROMI IA, un asistente de triage médico previo a videoconsulta. ' +
            'Pregunta el motivo de consulta y síntomas clave, solicita antecedentes relevantes y elabora un resumen para el médico. ' +
            'Sé empático, claro y conciso. Nunca diagnostiques ni prescribas.',
        },
        { role: 'user', content: userText },
      ],
      temperature: 0.3,
      max_tokens: 700,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      this.logger.error(`Azure OpenAI error ${res.status}: ${text}`);
      throw new Error(`Azure ${res.status}`);
    }

    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    return data?.choices?.[0]?.message?.content ?? 'No tengo respuesta en este momento.';
  }
}
