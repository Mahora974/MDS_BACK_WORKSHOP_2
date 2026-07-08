import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Baccalaureat_specialitesService } from './baccalaureat_specialites.service';

@Controller('api/baccalaureat_specialites')
export class Baccalaureat_specialitesController {
  constructor(private readonly service: Baccalaureat_specialitesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}