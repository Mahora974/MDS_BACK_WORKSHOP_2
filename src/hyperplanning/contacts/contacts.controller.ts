import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('api/contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @Get() findAll() { return 'GET ' + this.service['baseUrl']; }
  @Post() create(@Body() data: any) { return 'POST ' + this.service['baseUrl']; }
}