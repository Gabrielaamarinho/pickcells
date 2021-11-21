import { ConnectCredit } from 'src/connect-credit/connect-credit.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToMany } from 'typeorm';

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
