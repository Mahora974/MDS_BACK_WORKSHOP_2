import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Calendriers_notationService } from './calendriers_notation.service';

@Controller('api/calendriers_notation')
export class Calendriers_notationController {
  constructor(private readonly service: Calendriers_notationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}