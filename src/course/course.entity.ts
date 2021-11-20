import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Type } from './courses.enum';

@Entity()
export class Course {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({length: 100})
	description: string;

	@Column("enum", {enum: Type})
   	type: Type;

	@CreateDateColumn()
   	created_at: Date;

   	@UpdateDateColumn()
   	updated_at: Date;
}
