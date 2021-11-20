import { IsNotEmpty, IsString, MaxLength, IsOptional, IsNumber, IsEnum } from "class-validator"
import { Type } from "../courses.enum";

export class UpdateCourseDto {
	
	@IsString()
	@IsOptional()
	@MaxLength(100)
	description?: string;

	@IsEnum({enum: Type})
	@IsOptional()
   	type?: Type;
}
