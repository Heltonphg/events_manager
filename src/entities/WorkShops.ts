import { Event } from './Event';
import {Entity, Column, CreateDateColumn,PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'

@Entity('workshops')
export class WorkShop {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  speaker: string;

  @Column()
  speaker_organization: string;

  @Column()
  number_of_vocacies: number;

  @Column()
  techs: string;

  @Column()
  event_id: string;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @CreateDateColumn()
  event_time: Date;

  @CreateDateColumn()
  created_at: Date;
}