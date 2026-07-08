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
import { CarpoolsService } from './carpools.service';
import { CreateCarpoolDto } from './dto/create-carpool.dto';
import { UpdateCarpoolDto } from './dto/update-carpool.dto';

@Controller('carpools')
export class CarpoolsController {
  constructor(private readonly carpoolsService: CarpoolsService) {}

  @Post()
  create(@Body() dto: CreateCarpoolDto) {
    return this.carpoolsService.create(dto);
  }

  @Get()
  findAll() {
    return this.carpoolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carpoolsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarpoolDto) {
    return this.carpoolsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.carpoolsService.remove(id);
  }
}
