import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { SubjectModule } from './subject/subject.module';
import { ConectCreditModule } from './conect-credit/conect-credit.module';
import { Subject } from './subject/subject.entity';
import { Course } from './course/course.entity';
import { ConectCredit } from './conect-credit/conect-credit.entity';

@Module({
  imports:[TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'pickcells',
    entities: [Subject, Course, ConectCredit],
    synchronize: true,
    logging: true
}), CourseModule, SubjectModule, ConectCreditModule],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
