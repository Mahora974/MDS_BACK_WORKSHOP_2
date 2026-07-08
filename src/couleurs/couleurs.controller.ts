import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CouleursService } from './couleurs.service';

@Controller('api/couleurs')
export class CouleursController {
  constructor(private readonly service: CouleursService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}