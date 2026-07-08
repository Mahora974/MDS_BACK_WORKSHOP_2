import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Type_dernier_diplomeService } from './type_dernier_diplome.service';

@Controller('api/type_dernier_diplome')
export class Type_dernier_diplomeController {
  constructor(private readonly service: Type_dernier_diplomeService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}