import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator"
import { Type } from '../courses.enum';

export class CreateCourseDto {

	@IsString()
	@IsNotEmpty()
	@MaxLength(100)
	description: string;

	@IsEnum({enum: Type})
	@IsNotEmpty()
   	type: Type;
}
