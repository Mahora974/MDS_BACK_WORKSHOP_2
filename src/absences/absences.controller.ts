import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AbsencesService } from './absences.service';

@Controller('api/absences')
export class AbsencesController {
  constructor(private readonly service: AbsencesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}