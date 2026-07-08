import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TDOptionsService } from './tdoptions.service';

@Controller('api/tdoptions')
export class TDOptionsController {
  constructor(private readonly service: TDOptionsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}