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
import { BeBorrowedByService } from './be-borrowed-by.service';
import { CreateBeBorrowedByDto } from './dto/create-be-borrowed-by.dto';
import { UpdateBeBorrowedByDto } from './dto/update-be-borrowed-by.dto';

@Controller('be-borrowed-by')
export class BeBorrowedByController {
  constructor(private readonly service: BeBorrowedByService) {}

  @Post()
  create(@Body() dto: CreateBeBorrowedByDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idUser/:idEquipment/:startBorrowDate')
  findOne(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idEquipment', ParseIntPipe) idEquipment: number,
    @Param('startBorrowDate') startBorrowDate: string,
  ) {
    return this.service.findOne(idUser, idEquipment, startBorrowDate);
  }

  @Patch(':idUser/:idEquipment/:startBorrowDate')
  update(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idEquipment', ParseIntPipe) idEquipment: number,
    @Param('startBorrowDate') startBorrowDate: string,
    @Body() dto: UpdateBeBorrowedByDto,
  ) {
    return this.service.update(idUser, idEquipment, startBorrowDate, dto);
  }

  @Delete(':idUser/:idEquipment/:startBorrowDate')
  remove(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('idEquipment', ParseIntPipe) idEquipment: number,
    @Param('startBorrowDate') startBorrowDate: string,
  ) {
    return this.service.remove(idUser, idEquipment, startBorrowDate);
  }
}
