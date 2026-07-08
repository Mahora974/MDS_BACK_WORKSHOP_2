import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Modules_notationService } from './modules_notation.service';

@Controller('api/modules_notation')
export class Modules_notationController {
  constructor(private readonly service: Modules_notationService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}