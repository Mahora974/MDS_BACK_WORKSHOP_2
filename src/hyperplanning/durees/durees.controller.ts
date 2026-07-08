import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DureesService } from './durees.service';

@Controller('api/durees')
export class DureesController {
  constructor(private readonly service: DureesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}