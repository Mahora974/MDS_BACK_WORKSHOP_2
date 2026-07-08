import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Profils_utilisationService } from './profils_utilisation.service';

@Controller('api/profils_utilisation')
export class Profils_utilisationController {
  constructor(private readonly service: Profils_utilisationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}