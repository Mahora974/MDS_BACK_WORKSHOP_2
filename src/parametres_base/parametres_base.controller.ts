import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Parametres_baseService } from './parametres_base.service';

@Controller('api/parametres_base')
export class Parametres_baseController {
  constructor(private readonly service: Parametres_baseService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}