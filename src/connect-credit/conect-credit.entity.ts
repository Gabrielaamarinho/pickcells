import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ConnectCredit {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@OneToOne(type => Course, course => course.id)
	id_course: number;

	@Column()
	@OneToOne(type => Subject, subject => subject.id)
	id_subject: number;

	@Column()
	quant_credit: number;

	@Column({default: true})
	isRequired: boolean;

	@CreateDateColumn()
   	created_at: Date

   	@UpdateDateColumn()
   	updated_at: Date

}
