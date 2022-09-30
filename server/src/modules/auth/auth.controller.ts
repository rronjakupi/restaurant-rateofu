import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() createAuthDto: LoginRequestDto) {
    return this.authService.login(createAuthDto);
  }
}