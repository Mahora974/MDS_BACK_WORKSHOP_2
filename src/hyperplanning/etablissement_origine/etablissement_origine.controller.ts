import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Etablissement_origineService } from './etablissement_origine.service';

@Controller('api/etablissement_origine')
export class Etablissement_origineController {
  constructor(private readonly service: Etablissement_origineService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}