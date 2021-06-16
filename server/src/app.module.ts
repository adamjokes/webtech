import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [ChatsModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
