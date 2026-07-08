import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MatieresService } from './matieres.service';

@Controller('api/matieres')
export class MatieresController {
  constructor(private readonly service: MatieresService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}