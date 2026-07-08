import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppariteursService } from './appariteurs.service';

@Controller('api/appariteurs')
export class AppariteursController {
  constructor(private readonly service: AppariteursService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}