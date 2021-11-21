import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ConectCredit } from 'src/conect-credit/conect-credit.entity';
import { CreateConectCreditDto } from 'src/conect-credit/dto/create.dto';
import { UpdateConectCreditDto } from 'src/conect-credit/dto/update.dto';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';

@Controller('course')
export class CourseController {
	constructor(private readonly courseService: CourseService) {}

  @Post('/create')
  async createCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseService.createCourse(createCourseDto);
  }

  @Post('/create/connectCredit')
  async createConectCredit(@Body() createConectCreditDto: CreateConectCreditDto): Promise<ConectCredit> {
    return await this.courseService.createConectCredit(createConectCreditDto);
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
  async updateCourse(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return await this.courseService.updateCourse(id, updateCourseDto);
  }

  @Put('/edit/connectCredit/:id')
  async updateConnectCredit(@Param('id') id: number, @Body() updateConnectCredit: UpdateConectCreditDto) {
    return await this.courseService.updateConectCredit(id, updateConnectCredit);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.courseService.remove(id);
    return "Curso deletado!"
  }
}
