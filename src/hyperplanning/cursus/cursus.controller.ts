import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CursusService } from './cursus.service';

@Controller('api/cursus')
export class CursusController {
  constructor(private readonly service: CursusService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}