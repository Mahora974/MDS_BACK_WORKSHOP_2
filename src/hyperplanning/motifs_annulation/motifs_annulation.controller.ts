import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Motifs_annulationService } from './motifs_annulation.service';

@Controller('api/motifs_annulation')
export class Motifs_annulationController {
  constructor(private readonly service: Motifs_annulationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}