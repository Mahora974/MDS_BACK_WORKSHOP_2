import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('api/version')
export class VersionController {
  constructor(private readonly service: VersionService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}