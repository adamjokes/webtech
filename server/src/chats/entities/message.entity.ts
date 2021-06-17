import { Room } from '../../rooms/entities/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    ip_address: string;

    @Column({})
    input: string;
  

    @Column({ type:'datetime', nullable:true})
    created_at: Date;

    @ManyToOne(() => Room, (room) => room.messages, {
        onDelete: 'CASCADE',
        eager:true
      })
      room: Room;
}
