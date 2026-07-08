import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BeProfessorForService } from './be-professor-for.service';
import { CreateBeProfessorForDto } from './dto/create-be-professor-for.dto';
import { UpdateBeProfessorForDto } from './dto/update-be-professor-for.dto';

@Controller('be-professor-for')
export class BeProfessorForController {
  constructor(private readonly service: BeProfessorForService) {}

  @Post()
  create(@Body() dto: CreateBeProfessorForDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idUser/:idClassGroup/:idCategory')
  findOne(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idClassGroup', ParseIntPipe) idClassGroup: number,
    @Param('idCategory', ParseIntPipe) idCategory: number,
  ) {
    return this.service.findOne(idUser, idClassGroup, idCategory);
  }

  @Patch(':idUser/:idClassGroup/:idCategory')
  update(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idClassGroup', ParseIntPipe) idClassGroup: number,
    @Param('idCategory', ParseIntPipe) idCategory: number,
    @Body() dto: UpdateBeProfessorForDto,
  ) {
    return this.service.update(idUser, idClassGroup, idCategory, dto);
  }

  @Delete(':idUser/:idClassGroup/:idCategory')
  remove(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idClassGroup', ParseIntPipe) idClassGroup: number,
    @Param('idCategory', ParseIntPipe) idCategory: number,
  ) {
    return this.service.remove(idUser, idClassGroup, idCategory);
  }
}
