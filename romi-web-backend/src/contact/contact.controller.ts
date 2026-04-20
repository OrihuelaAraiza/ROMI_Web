import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { SendDto } from './dto/send.dto';

@Controller('contact')
export class ContactController {
	constructor(private readonly contactService: ContactService) {}

	@Post()
	async send(@Body() dto: SendDto) {
		await this.contactService.send(dto);
		return { ok: true };
	}
}
