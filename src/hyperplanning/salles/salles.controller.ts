import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SallesService } from './salles.service';

@Controller('api/salles')
export class SallesController {
  constructor(private readonly service: SallesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}