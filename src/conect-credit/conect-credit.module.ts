import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { ConectCredit } from './conect-credit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConectCredit])],
})
export class ConectCreditModule {}
