import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthSessionService } from './auth-session.service';
import { CreateAuthSessionDto } from './dto/create-auth-session.dto';
import { UpdateAuthSessionDto } from './dto/update-auth-session.dto';

@Controller('auth-sessions')
export class AuthSessionController {
  constructor(private readonly authSessionService: AuthSessionService) {}

  @Post()
  create(@Body() dto: CreateAuthSessionDto) {
    return this.authSessionService.create(dto);
  }

  @Get()
  findAll() {
    return this.authSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authSessionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAuthSessionDto) {
    return this.authSessionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.authSessionService.remove(id);
  }
}
