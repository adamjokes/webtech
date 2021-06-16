import { Room } from 'src/rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    ip_address: string;

    @Column({})
    input: string;
  

    @Column({ default:new Date()})
    created_at: Date;

    @ManyToOne(() => Room, (room) => room.messages, {
        onDelete: 'CASCADE',
      })
      room: string;
}
