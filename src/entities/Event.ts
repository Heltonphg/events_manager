import {Entity, Column, CreateDateColumn,PrimaryColumn} from 'typeorm'

@Entity('events')
export class Event {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  entre_value: number;

  @CreateDateColumn()
  created_at: Date;
}