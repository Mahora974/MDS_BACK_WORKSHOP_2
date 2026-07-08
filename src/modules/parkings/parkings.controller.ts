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
import { ParkingsService } from './parkings.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';

@Controller('parkings')
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingsService) {}

  @Post()
  create(@Body() dto: CreateParkingDto) {
    return this.parkingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.parkingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.parkingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateParkingDto) {
    return this.parkingsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.parkingsService.remove(id);
  }
}
