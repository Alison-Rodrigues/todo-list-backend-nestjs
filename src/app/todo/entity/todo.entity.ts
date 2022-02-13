import { type } from 'os';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'todos'})
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task: string;

  @Column({ name: 'is_done', type: 'smallint', width: 1})
  isDone: number;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'update_at'})
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at'})
  deletedAt: string;
}
