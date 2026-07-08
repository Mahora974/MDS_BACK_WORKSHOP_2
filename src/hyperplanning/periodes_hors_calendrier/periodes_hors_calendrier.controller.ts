import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Periodes_hors_calendrierService } from './periodes_hors_calendrier.service';

@Controller('api/periodes_hors_calendrier')
export class Periodes_hors_calendrierController {
  constructor(private readonly service: Periodes_hors_calendrierService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}