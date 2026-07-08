import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Periodes_notationService } from './periodes_notation.service';

@Controller('api/periodes_notation')
export class Periodes_notationController {
  constructor(private readonly service: Periodes_notationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}