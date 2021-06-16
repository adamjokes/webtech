import { Message } from 'src/chats/entities/chat.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;

    @Column({nullable: true})
    image: string;
  

    @Column({ default:new Date()})
    created_at: Date;

    @OneToMany(() => Message, (message) => message.room, {
        cascade: true,
        nullable: true,
      })
      messages: Message[];
}
