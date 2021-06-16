import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Message } from './entities/chat.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
  ],
  controllers: [ChatsController],
  providers: [ChatsService],
  exports: [TypeOrmModule],
})
export class ChatsModule {}
