import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Services_notationService } from './services_notation.service';

@Controller('api/services_notation')
export class Services_notationController {
  constructor(private readonly service: Services_notationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}