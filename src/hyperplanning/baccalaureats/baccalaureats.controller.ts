import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { BaccalaureatsService } from './baccalaureats.service';

@Controller('api/baccalaureats')
export class BaccalaureatsController {
  constructor(private readonly service: BaccalaureatsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}