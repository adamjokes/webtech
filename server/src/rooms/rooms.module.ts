import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Room } from './entities/room.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '365d' },
    }),
    AuthModule
  ],

  controllers: [RoomsController],
  providers: [RoomsService]
})
export class RoomsModule {}
