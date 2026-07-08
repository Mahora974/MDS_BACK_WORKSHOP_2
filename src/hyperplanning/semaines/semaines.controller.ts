import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SemainesService } from './semaines.service';

@Controller('api/semaines')
export class SemainesController {
  constructor(private readonly service: SemainesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}