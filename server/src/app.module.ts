import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { RoomsModule } from './rooms/rooms.module';
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'webtech123',
      database: 'dev_profile',
      autoLoadEntities: true,
      synchronize: true,
    })
    
    ,ChatsModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
