import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Motifs_dispenseService } from './motifs_dispense.service';

@Controller('api/motifs_dispense')
export class Motifs_dispenseController {
  constructor(private readonly service: Motifs_dispenseService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}