import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PromotionsService } from './promotions.service';

@Controller('api/promotions')
export class PromotionsController {
  constructor(private readonly service: PromotionsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}