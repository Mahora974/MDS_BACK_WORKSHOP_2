import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('api/notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}