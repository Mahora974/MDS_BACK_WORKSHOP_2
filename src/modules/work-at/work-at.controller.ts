import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { WorkAtService } from './work-at.service';
import { CreateWorkAtDto } from './dto/create-work-at.dto';

@Controller('work-at')
export class WorkAtController {
  constructor(private readonly service: WorkAtService) {}

  @Post()
  create(@Body() dto: CreateWorkAtDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idUser/:idSchool')
  findOne(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idSchool', ParseIntPipe) idSchool: number,
  ) {
    return this.service.findOne(idUser, idSchool);
  }

  @Delete(':idUser/:idSchool')
  remove(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idSchool', ParseIntPipe) idSchool: number,
  ) {
    return this.service.remove(idUser, idSchool);
  }
}
