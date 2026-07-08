import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('api/modules')
export class ModulesController {
  constructor(private readonly service: ModulesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}