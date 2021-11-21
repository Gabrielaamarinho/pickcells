import {IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { JoinColumn, ManyToMany } from 'typeorm';

export class UpdateConnectCreditDto {


	@IsOptional()
	@IsNumber()
	id_course?: number;

	@IsOptional()
	@IsNumber()
	id_subject?: number;

	@IsNumber()
	@IsOptional()
	quant_credits?: number;

	@IsBoolean()
	@IsOptional()
	isRequired?: boolean;
}
