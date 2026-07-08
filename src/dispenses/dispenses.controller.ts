import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DispensesService } from './dispenses.service';

@Controller('api/dispenses')
export class DispensesController {
  constructor(private readonly service: DispensesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}