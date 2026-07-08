import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CoursService } from './cours.service';

@Controller('api/cours')
export class CoursController {
  constructor(private readonly service: CoursService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}