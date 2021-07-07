import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Message } from './entities/message.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '365d' },
    }),
    AuthModule
  ],
  controllers: [ChatsController],
  providers: [ChatsService],

})
export class ChatsModule {}
