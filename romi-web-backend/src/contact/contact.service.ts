import {
	Injectable,
	InternalServerErrorException,
	Logger,
} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendDto } from './dto/send.dto';

@Injectable()
export class ContactService {
	private readonly logger = new Logger(ContactService.name);

	async send(dto: SendDto): Promise<void> {
		const host = process.env.SMTP_HOST;
		const port = Number(process.env.SMTP_PORT ?? 587);
		const secure = (process.env.SMTP_SECURE ?? 'false').toLowerCase() === 'true';
		const user = process.env.SMTP_USER;
		const pass = process.env.SMTP_PASS;
		const to = process.env.CONTACT_TO_EMAIL;
		const from = process.env.CONTACT_FROM_EMAIL ?? user;

		if (!host || !user || !pass || !to || !from) {
			this.logger.error('Missing SMTP/contact environment variables.');
			throw new InternalServerErrorException('Email service is not configured.');
		}

		const transporter = nodemailer.createTransport({
			host,
			port,
			secure,
			auth: { user, pass },
		});

		await transporter.sendMail({
			from: `ROMI Contacto <${from}>`,
			to,
			subject: `[Contacto ROMI] ${dto.asunto}`,
			replyTo: dto.email,
			text: [
				`Nombre: ${dto.nombre}`,
				`Email: ${dto.email}`,
				`Asunto: ${dto.asunto}`,
				'',
				'Mensaje:',
				dto.mensaje,
			].join('\n'),
		});
	}
}
