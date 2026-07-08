import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { EnseignantsService } from './enseignants.service';

@Controller('api/enseignants')
export class EnseignantsController {
  constructor(private readonly service: EnseignantsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}