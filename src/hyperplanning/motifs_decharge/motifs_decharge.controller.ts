import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Motifs_dechargeService } from './motifs_decharge.service';

@Controller('api/motifs_decharge')
export class Motifs_dechargeController {
  constructor(private readonly service: Motifs_dechargeService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}