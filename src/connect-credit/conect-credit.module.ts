import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { ConnectCredit } from './conect-credit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConnectCredit])],
})
export class ConnectCreditModule {}
