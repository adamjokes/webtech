import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
@Module({
  imports:[
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '365d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,
    {
      provide: 'AUTH',
      useClass: AuthGuard,
    },
  ],

  exports:['AUTH']

})
export class AuthModule {}
