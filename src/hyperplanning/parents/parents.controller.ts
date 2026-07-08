import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ParentsService } from './parents.service';

@Controller('api/parents')
export class ParentsController {
  constructor(private readonly service: ParentsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}