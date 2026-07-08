import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LinkDegreeSchoolService } from './link-degree-school.service';
import { CreateLinkDegreeSchoolDto } from './dto/create-link-degree-school.dto';

@Controller('link-degree-school')
export class LinkDegreeSchoolController {
  constructor(private readonly service: LinkDegreeSchoolService) {}

  @Post()
  create(@Body() dto: CreateLinkDegreeSchoolDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idDegree/:idSchool')
  findOne(
    @Param('idDegree', ParseIntPipe) idDegree: number,
    @Param('idSchool', ParseIntPipe) idSchool: number,
  ) {
    return this.service.findOne(idDegree, idSchool);
  }

  @Delete(':idDegree/:idSchool')
  remove(
    @Param('idDegree', ParseIntPipe) idDegree: number,
    @Param('idSchool', ParseIntPipe) idSchool: number,
  ) {
    return this.service.remove(idDegree, idSchool);
  }
}
