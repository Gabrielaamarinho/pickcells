import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Subject {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({length: 200})
	name: string;

	@CreateDateColumn()
   	created_at: Date;

   	@UpdateDateColumn()
   	updated_at: Date;
}
