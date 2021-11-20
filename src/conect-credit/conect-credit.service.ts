import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { ConectCredit } from './conect-credit.entity';
import { CreateConectCreditDto } from './dto/create.dto';
import { UpdateConectCreditDto } from './dto/update.dto';

@Injectable()
export class ConectCreditService {
	constructor(
		@InjectRepository(ConectCredit)
		private conectCreditRepository: Repository<ConectCredit>,
		@InjectRepository(Course)
		private courseRepository: Repository<Course>,
		@InjectRepository(Subject)
		private subjectRepository: Repository<Subject>
	    ) {}
	    
	async create(createConecCreditDto: CreateConectCreditDto): Promise<ConectCredit>{
		if(!await this.findIdCourse(createConecCreditDto.id_course)){
			throw new HttpException("ID do curso não encontrado", HttpStatus.BAD_REQUEST);
		}
		if(!await this.findIdSubject(createConecCreditDto.id_subject)){
			throw new HttpException("ID da disciplina não encontrado", HttpStatus.BAD_REQUEST);
		}
		const conectCredit = this.conectCreditRepository.create(createConecCreditDto);
		conectCredit.id_course = createConecCreditDto.id_course;
		conectCredit.id_subject = createConecCreditDto.id_subject;

		return await this.conectCreditRepository.save(conectCredit);
	}
	    
	  findAll(): Promise<ConectCredit[]> {
			return this.conectCreditRepository.find();
	  }
	    
	  findOne(id: number): Promise<ConectCredit> {
			return this.conectCreditRepository.findOne(id);
	  }
	    
	  async findIdCourse(id_course: number): Promise<Course> {
		  return this.courseRepository.findOne( id_course );
		}
	    
		async findIdSubject(id_subject: number): Promise<Subject> {
			return this.subjectRepository.findOne( id_subject );
		}
	    
	  async update(id: number, updateConecCreditDto: UpdateConectCreditDto) {
			const conectCredit = updateConecCreditDto;
				
			if(conectCredit.id_course) {
				conectCredit.id_course = updateConecCreditDto.id_course
			}
			if(conectCredit.id_subject) {
				conectCredit.id_subject = updateConecCreditDto.id_subject
			}
			if(conectCredit.quant_credits) {
				conectCredit.quant_credits = updateConecCreditDto.quant_credits
			}
				
			this.conectCreditRepository.update(id, conectCredit);
			return this.conectCreditRepository.findOne(id)
	  }
	    
	  async remove(id: number) {
			await this.conectCreditRepository.delete(id);
	 	}
	    
}
