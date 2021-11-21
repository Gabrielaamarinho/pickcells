import {IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class UpdateConnectCreditDto {

	@IsNumber()
	@IsOptional()
	id_course?: number;

	@IsNumber()
	@IsOptional()
	id_subject?: number;

	@IsNumber()
	@IsOptional()
	quant_credits?: number;

	@IsBoolean()
	@IsOptional()
	isRequired?: boolean;
}
