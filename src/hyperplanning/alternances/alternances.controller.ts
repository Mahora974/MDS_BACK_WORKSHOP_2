import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AlternancesService } from './alternances.service';

@Controller('api/alternances')
export class AlternancesController {
  constructor(private readonly service: AlternancesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}