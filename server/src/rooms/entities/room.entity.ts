import { Message } from '../../chats/entities/message.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column({nullable: true})
    image: string;
  

    @Column({ type:'datetime', nullable: true})
    created_at: Date;

    @OneToMany(() => Message, (message) => message.room, {
        cascade: true,
        nullable: true,
       
      })
      messages: Message[];
}
