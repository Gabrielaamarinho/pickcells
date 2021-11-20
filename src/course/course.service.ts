import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';

@Injectable()
export class CourseService {
	constructor(
		@InjectRepository(Course)
		private courseRepository: Repository<Course>,
	){}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const curso = this.courseRepository.create(createCourseDto);

    curso.description = createCourseDto.description;
    curso.type = createCourseDto.type;

    return await this.courseRepository.save(curso);
  }

  findAll(): Promise<Course[]>{
		return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course>{
		return this.courseRepository.findOne(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const curso = updateCourseDto;

    this.courseRepository.update(id, curso);
    return this.courseRepository.findOne(id); //Return Object
  }

  async remove(id: number): Promise<void> {
		await this.courseRepository.delete(id);
  }
}
