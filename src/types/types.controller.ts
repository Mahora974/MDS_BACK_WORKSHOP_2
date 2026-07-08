import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TypesService } from './types.service';

@Controller('api/types')
export class TypesController {
  constructor(private readonly service: TypesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}