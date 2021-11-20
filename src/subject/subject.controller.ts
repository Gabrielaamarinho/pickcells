import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create.dto';
import { UpdateSubjectDto } from './dto/update.dto';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
	constructor(private readonly subjectService: SubjectService) {}

  @Post('/create')
  async create(@Body() createsubjectDto: CreateSubjectDto): Promise<Subject> {
    return await this.subjectService.create(createsubjectDto);
  }

  @Get()
  async findAll() : Promise<Subject[]> {
    return await this.subjectService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Subject>{
    return await this.subjectService.findOne(id);
  }

  @Put('/edit/:id')
  async update(@Param('id') id: number, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.subjectService.remove(id);
    return "Disciplina deletada!"
  }

}
