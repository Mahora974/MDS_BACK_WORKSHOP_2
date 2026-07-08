import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Couts_horaires_enseignantsService } from './couts_horaires_enseignants.service';

@Controller('api/couts_horaires_enseignants')
export class Couts_horaires_enseignantsController {
  constructor(private readonly service: Couts_horaires_enseignantsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}