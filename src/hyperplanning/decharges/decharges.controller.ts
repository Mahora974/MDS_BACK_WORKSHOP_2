import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DechargesService } from './decharges.service';

@Controller('api/decharges')
export class DechargesController {
  constructor(private readonly service: DechargesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}