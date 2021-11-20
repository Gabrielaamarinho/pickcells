import { MaxLength, IsString, IsOptional } from 'class-validator';

export class UpdateSubjectDto {
	
	@IsString()
	@IsOptional()
	@MaxLength(200)
	name?: string;
}
