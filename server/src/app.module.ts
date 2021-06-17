import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { RoomsModule } from './rooms/rooms.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Room } from './rooms/entities/room.entity';
import { Message } from './chats/entities/message.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'webtech123',
      database: 'dev_profile',
      autoLoadEntities: true,
      entities: [Room,Message],
      logger: 'advanced-console',
      // migrationsRun: true,
      synchronize: true,
    })
    
    ,ChatsModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
