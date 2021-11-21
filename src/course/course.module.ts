import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectCredit } from 'src/connect-credit/connect-credit.entity';
import { Subject } from 'src/subject/subject.entity';
import { CourseController } from './course.controller';
import { Course } from './course.entity';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Subject, ConnectCredit])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
