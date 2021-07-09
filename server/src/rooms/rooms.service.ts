import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>

  ) {}
  create(createChatDto: CreateRoomDto) {
    return this.roomRepository.save(createChatDto)
  }

  findAll() {
    return this.roomRepository.find()
  }
  

  findOne(id: number) {
    return this.roomRepository.findOne(id)
  }

  update(id: number, updateChatDto: UpdateRoomDto) {
    return this.roomRepository.createQueryBuilder('room')
    .update()
    .where('id = :id', { id })
    .set(updateChatDto)
    .execute();
  }

  remove(id: number) {
    return this.roomRepository
    .createQueryBuilder()
    .delete()
    .where('id = :id', { id })
    .execute();
  }
}
