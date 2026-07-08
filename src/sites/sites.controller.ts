import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { SitesService } from './sites.service';

@Controller('api/sites')
export class SitesController {
  constructor(private readonly service: SitesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}