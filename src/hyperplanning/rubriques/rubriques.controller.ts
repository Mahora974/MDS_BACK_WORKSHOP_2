import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RubriquesService } from './rubriques.service';

@Controller('api/rubriques')
export class RubriquesController {
  constructor(private readonly service: RubriquesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}