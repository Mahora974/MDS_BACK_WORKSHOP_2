import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RetardsService } from './retards.service';

@Controller('api/retards')
export class RetardsController {
  constructor(private readonly service: RetardsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}