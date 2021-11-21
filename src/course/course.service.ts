import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';
import { Subject } from 'src/subject/subject.entity';
import { ConnectCredit } from 'src/connect-credit/connect-credit.entity';
import { CreateConnectCreditDto } from 'src/connect-credit/dto/create.dto';
import { UpdateConnectCreditDto } from 'src/connect-credit/dto/update.dto';

@Injectable()
export class CourseService {
	constructor(
		@InjectRepository(Course)
		private courseRepository: Repository<Course>,
    @InjectRepository(ConnectCredit)
    private connectCreditRepository: Repository<ConnectCredit>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
	){}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const curso = this.courseRepository.create(createCourseDto);

    curso.description = createCourseDto.description;
    curso.type = createCourseDto.type;

    return await this.courseRepository.save(curso);
  }

  async createConnectCredit(createConnectCreditDto: CreateConnectCreditDto): Promise<ConnectCredit>{
		if(!await this.findIdCourse(createConnectCreditDto.id_course)){
			throw new HttpException("ID do curso não encontrado", HttpStatus.BAD_REQUEST);
		}
		if(!await this.findIdSubject(createConnectCreditDto.id_subject)){
			throw new HttpException("ID da disciplina não encontrado", HttpStatus.BAD_REQUEST);
		}
		const connectCredit = this.connectCreditRepository.create(createConnectCreditDto);
		connectCredit.id_course = createConnectCreditDto.id_course;
		connectCredit.id_subject = createConnectCreditDto.id_subject;

		return await this.connectCreditRepository.save(connectCredit);
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

  async tableRelation(): Promise<ConnectCredit> {
    return await this.connectCreditRepository
    .createQueryBuilder("connectCredit")
    .select("SUM(connectCredit.isRequired)", "sum")
    .where("connectCredit.isRequired = :isRequired", {isRequired: true})
    .getRawOne();
  }

  async updateCourse(id: Course, updateCourseDto: UpdateCourseDto) {
    const curso = updateCourseDto;

    this.courseRepository.update(id, curso);
    return this.courseRepository.findOne(id); //Return Object
  }

  async updateConectCredit(id: Course, updateConnectCreditDto: UpdateConnectCreditDto) {
    const connectCredit = updateConnectCreditDto;
      
    if(connectCredit.id_course) {
      connectCredit.id_course = updateConnectCreditDto.id_course
    }
    if(connectCredit.id_subject) {
      connectCredit.id_subject = updateConnectCreditDto.id_subject
    }
    if(connectCredit.quant_credits) {
      connectCredit.quant_credits = updateConnectCreditDto.quant_credits
    }
      
    this.connectCreditRepository.update(id, connectCredit);
    return this.connectCreditRepository.findOne(id)
  }

  async remove(id: number): Promise<void> {
		await this.courseRepository.delete(id);
  }
}
