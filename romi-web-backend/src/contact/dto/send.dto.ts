import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SendDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(120)
	nombre!: string;

	@IsEmail()
	@MaxLength(180)
	email!: string;

	@IsString()
	@IsNotEmpty()
	@MaxLength(160)
	asunto!: string;

	@IsString()
	@IsNotEmpty()
	@MaxLength(3000)
	mensaje!: string;
}
