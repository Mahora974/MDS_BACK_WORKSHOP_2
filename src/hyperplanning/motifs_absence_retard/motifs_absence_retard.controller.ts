import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Motifs_absence_retardService } from './motifs_absence_retard.service';

@Controller('api/motifs_absence_retard')
export class Motifs_absence_retardController {
  constructor(private readonly service: Motifs_absence_retardService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}