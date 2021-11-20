import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubjectDto } from './dto/create.dto';
import { UpdateSubjectDto } from './dto/update.dto';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
	constructor(
		@InjectRepository(Subject)
		private subjectRepository: Repository<Subject>,
	){}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const subject = this.subjectRepository.create(createSubjectDto);

    return await this.subjectRepository.save(subject);
  }

  findAll(): Promise<Subject[]>{
		return this.subjectRepository.find();
  }

  findOne(id: number): Promise<Subject>{
		return this.subjectRepository.findOne(id);
  }

  update(id: number, updatesubjectDto: UpdateSubjectDto) {
    const subject = updatesubjectDto;

    this.subjectRepository.update(id, subject);    
    return this.subjectRepository.findOne(id);
  }

  async remove(id: number): Promise<void>{
    await this.subjectRepository.delete(id);
  }
}
