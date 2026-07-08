import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Couts_horaires_sallesService } from './couts_horaires_salles.service';

@Controller('api/couts_horaires_salles')
export class Couts_horaires_sallesController {
  constructor(private readonly service: Couts_horaires_sallesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}