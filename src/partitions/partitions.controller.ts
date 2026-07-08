import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PartitionsService } from './partitions.service';

@Controller('api/partitions')
export class PartitionsController {
  constructor(private readonly service: PartitionsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}