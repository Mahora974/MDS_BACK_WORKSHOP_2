import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DevoirsService } from './devoirs.service';

@Controller('api/devoirs')
export class DevoirsController {
  constructor(private readonly service: DevoirsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}