import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RegroupementsService } from './regroupements.service';

@Controller('api/regroupements')
export class RegroupementsController {
  constructor(private readonly service: RegroupementsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}