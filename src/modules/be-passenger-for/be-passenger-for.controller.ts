import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BePassengerForService } from './be-passenger-for.service';
import { CreateBePassengerForDto } from './dto/create-be-passenger-for.dto';

@Controller('be-passenger-for')
export class BePassengerForController {
  constructor(private readonly service: BePassengerForService) {}

  @Post()
  create(@Body() dto: CreateBePassengerForDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idPassenger/:idCarpool')
  findOne(
    @Param('idPassenger', ParseIntPipe) idPassenger: number,
    @Param('idCarpool', ParseIntPipe) idCarpool: number,
  ) {
    return this.service.findOne(idPassenger, idCarpool);
  }

  @Delete(':idPassenger/:idCarpool')
  remove(
    @Param('idPassenger', ParseIntPipe) idPassenger: number,
    @Param('idCarpool', ParseIntPipe) idCarpool: number,
  ) {
    return this.service.remove(idPassenger, idCarpool);
  }
}
