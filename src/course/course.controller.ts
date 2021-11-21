import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ConnectCredit } from 'src/connect-credit/connect-credit.entity';
import { CreateConnectCreditDto } from 'src/connect-credit/dto/create.dto';
import { UpdateConnectCreditDto } from 'src/connect-credit/dto/update.dto';
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
  async createConnectCredit(@Body() createConnectCreditDto: CreateConnectCreditDto): Promise<ConnectCredit> {
    return await this.courseService.createConnectCredit(createConnectCreditDto);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return await this.courseService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Course> {
    return await this.courseService.findOne(id);
  }

  @Get('/relation/:id')
  async findtodos(@Param('id') id: number): Promise<ConnectCredit[]> {
    return await this.courseService.tableRelation(id);
  }

  @Put('/edit/:id')
  async updateCourse(@Param('id') id: any, @Body() updateCourseDto: UpdateCourseDto) {
    return await this.courseService.updateCourse(id, updateCourseDto);
  }

  @Put('/edit/connectCredit/:id')
  async updateConnectCredit(@Param('id') id: any, @Body() updateConnectCredit: UpdateConnectCreditDto) {
    return await this.courseService.updateConectCredit(id, updateConnectCredit);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.courseService.remove(id);
    return "Curso deletado!"
  }
}
