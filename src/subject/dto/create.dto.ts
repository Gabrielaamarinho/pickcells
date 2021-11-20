import {IsNotEmpty, MaxLength, IsString } from "class-validator"

export class CreateSubjectDto {

	@IsString()
	@IsNotEmpty()
	@MaxLength(200)
	name: string;

}
