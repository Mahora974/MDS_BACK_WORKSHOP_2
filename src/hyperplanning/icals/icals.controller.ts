import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { IcalsService } from './icals.service';

@Controller('api/icals')
export class IcalsController {
  constructor(private readonly service: IcalsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}