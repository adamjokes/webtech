import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private jwtService: JwtService,
    ) {}

  @Post()
  create() {
    return this.jwtService.sign({date:Date.now()})
  }
}
