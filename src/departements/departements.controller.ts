import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DepartementsService } from './departements.service';

@Controller('api/departements')
export class DepartementsController {
  constructor(private readonly service: DepartementsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}