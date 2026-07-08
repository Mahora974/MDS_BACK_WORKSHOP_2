import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { StagesService } from './stages.service';

@Controller('api/stages')
export class StagesController {
  constructor(private readonly service: StagesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}