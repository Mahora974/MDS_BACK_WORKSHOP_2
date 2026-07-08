import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { FamillesService } from './familles.service';

@Controller('api/familles')
export class FamillesController {
  constructor(private readonly service: FamillesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}