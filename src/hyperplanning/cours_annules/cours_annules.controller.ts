import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Cours_annulesService } from './cours_annules.service';

@Controller('api/cours_annules')
export class Cours_annulesController {
  constructor(private readonly service: Cours_annulesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}