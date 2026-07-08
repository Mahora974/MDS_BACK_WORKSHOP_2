import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BeNotifiedForService } from './be-notified-for.service';
import { CreateBeNotifiedForDto } from './dto/create-be-notified-for.dto';

@Controller('be-notified-for')
export class BeNotifiedForController {
  constructor(private readonly service: BeNotifiedForService) {}

  @Post()
  create(@Body() dto: CreateBeNotifiedForDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idUser/:idTypeEvent')
  findOne(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idTypeEvent', ParseIntPipe) idTypeEvent: number,
  ) {
    return this.service.findOne(idUser, idTypeEvent);
  }

  @Delete(':idUser/:idTypeEvent')
  remove(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idTypeEvent', ParseIntPipe) idTypeEvent: number,
  ) {
    return this.service.remove(idUser, idTypeEvent);
  }
}
