import { connect } from 'http2';
import { ConnectCredit } from 'src/connect-credit/connect-credit.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToMany } from 'typeorm';
import { Type } from './cursos.enum';

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
