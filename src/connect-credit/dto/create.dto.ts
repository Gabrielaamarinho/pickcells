import {IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateConnectCreditDto {
	@IsNumber()
	@IsNotEmpty()
	id_course: number;

	@IsNumber()
	@IsNotEmpty()
	id_subject: number;

	@IsNumber()
	@IsNotEmpty()
	quant_credit: number;

	@IsBoolean()
	@IsNotEmpty()
	isRequired: boolean;
}
