import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { EtudiantsService } from './etudiants.service';

@Controller('api/etudiants')
export class EtudiantsController {
  constructor(private readonly service: EtudiantsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}