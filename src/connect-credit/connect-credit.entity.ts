import { Course } from 'src/course/course.entity';
import { Subject } from 'src/subject/subject.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, JoinColumn, JoinTable } from 'typeorm';

@Entity()
export class ConnectCredit {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	@ManyToMany(type => Course, (course: Course) => course.id)
	id_course: number;

	@Column()
	@ManyToMany(type => Subject, (subject: Subject) => subject.id)
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
