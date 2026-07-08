import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';

@Controller('api/utilisateurs')
export class UtilisateursController {
  constructor(private readonly service: UtilisateursService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}