import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>

  ) {}
  create(createChatDto: CreateChatDto) {
    return this.messageRepository.save(createChatDto as any)
  }

  findAll() {
    return this.messageRepository.find()
  }
  findByRoom(roomId: number){
    return this.messageRepository.find({room:roomId as any})
  }

  findOne(id: number) {
    return this.messageRepository.findOne(id)
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return this.messageRepository.createQueryBuilder('chat')
    .update()
    .where('id = :id', { id })
    .set(updateChatDto as any)
    .execute();
  }

  remove(id: number) {
    return this.messageRepository
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id })
    .execute();
  }
}
