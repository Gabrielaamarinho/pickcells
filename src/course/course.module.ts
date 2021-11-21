import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConectCredit } from 'src/conect-credit/conect-credit.entity';
import { Subject } from 'src/subject/subject.entity';
import { CourseController } from './course.controller';
import { Course } from './course.entity';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Subject, ConectCredit])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
