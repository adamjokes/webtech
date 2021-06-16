import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Message } from './entities/chat.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>

  ) {}
  create(createChatDto: CreateChatDto) {
    return this.messageRepository.save(createChatDto)
  }

  findAll() {
    return this.messageRepository.find()
  }
  findByRoom(roomId: string){
    return this.messageRepository.find({room:roomId})
  }

  findOne(id: string) {
    return this.messageRepository.findOne(id)
  }

  update(id: string, updateChatDto: UpdateChatDto) {
    return this.messageRepository.createQueryBuilder('chat')
    .update()
    .where('id = :id', { id })
    .set(updateChatDto)
    .execute();
  }

  remove(id: string) {
    return this.messageRepository
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id })
    .execute();
  }
}
