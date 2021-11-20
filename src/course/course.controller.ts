import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';

@Controller('course')
export class CourseController {
	constructor(private readonly courseService: CourseService) {}

  @Post('/create')
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseService.create(createCourseDto);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return await this.courseService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Course> {
    return await this.courseService.findOne(id);
  }

  @Put('/edit/:id')
  async update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return await this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.courseService.remove(id);
    return "Curso deletado!"
  }
}
