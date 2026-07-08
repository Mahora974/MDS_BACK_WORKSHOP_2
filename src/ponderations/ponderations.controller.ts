import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PonderationsService } from './ponderations.service';

@Controller('api/ponderations')
export class PonderationsController {
  constructor(private readonly service: PonderationsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}