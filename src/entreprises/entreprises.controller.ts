import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { EntreprisesService } from './entreprises.service';

@Controller('api/entreprises')
export class EntreprisesController {
  constructor(private readonly service: EntreprisesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}