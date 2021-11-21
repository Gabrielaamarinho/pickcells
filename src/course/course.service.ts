import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';
import { ConectCredit } from 'src/conect-credit/conect-credit.entity';
import { CreateConectCreditDto } from 'src/conect-credit/dto/create.dto';
import { Subject } from 'src/subject/subject.entity';
import { UpdateConectCreditDto } from 'src/conect-credit/dto/update.dto';

@Injectable()
export class CourseService {
	constructor(
		@InjectRepository(Course)
		private courseRepository: Repository<Course>,
    @InjectRepository(ConectCredit)
    private conectCreditRepository: Repository<ConectCredit>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
	){}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const curso = this.courseRepository.create(createCourseDto);

    curso.description = createCourseDto.description;
    curso.type = createCourseDto.type;

    return await this.courseRepository.save(curso);
  }

  async createConectCredit(createConectCreditDto: CreateConectCreditDto): Promise<ConectCredit>{
		if(!await this.findIdCourse(createConectCreditDto.id_course)){
			throw new HttpException("ID do curso não encontrado", HttpStatus.BAD_REQUEST);
		}
		if(!await this.findIdSubject(createConectCreditDto.id_subject)){
			throw new HttpException("ID da disciplina não encontrado", HttpStatus.BAD_REQUEST);
		}
		const conectCredit = this.conectCreditRepository.create(createConectCreditDto);
		conectCredit.id_course = createConectCreditDto.id_course;
		conectCredit.id_subject = createConectCreditDto.id_subject;

		return await this.conectCreditRepository.save(conectCredit);
  }

  findAll(): Promise<Course[]>{
		return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course>{
		return this.courseRepository.findOne(id);
  }

  async findIdCourse(id_course: number): Promise<Course> {
    return this.courseRepository.findOne( id_course );
  }
    
  async findIdSubject(id_subject: number): Promise<Subject> {
    return this.subjectRepository.findOne( id_subject );
  }

  async updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const curso = updateCourseDto;

    this.courseRepository.update(id, curso);
    return this.courseRepository.findOne(id); //Return Object
  }

  async updateConectCredit(id: number, updateConecCreditDto: UpdateConectCreditDto) {
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

  async remove(id: number): Promise<void> {
		await this.courseRepository.delete(id);
  }
}
