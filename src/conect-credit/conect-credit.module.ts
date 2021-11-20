import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { ConectCreditController } from './conect-credit.controller';
import { ConectCredit } from './conect-credit.entity';
import { ConectCreditService } from './conect-credit.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConectCredit, Course, Subject])],
  controllers: [ConectCreditController],
  providers: [ConectCreditService]
})
export class ConectCreditModule {}
