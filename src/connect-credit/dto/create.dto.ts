import {IsBoolean, IsNotEmpty, IsNumber } from "class-validator";
import { Course } from "src/course/course.entity";
import { Subject } from "src/subject/subject.entity";
import { JoinColumn, ManyToMany } from "typeorm";

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
