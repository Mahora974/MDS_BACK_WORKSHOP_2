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
import { TypeEventService } from './type-event.service';
import { CreateTypeEventDto } from './dto/create-type-event.dto';
import { UpdateTypeEventDto } from './dto/update-type-event.dto';

@Controller('type-events')
export class TypeEventController {
  constructor(private readonly typeEventService: TypeEventService) {}

  @Post()
  create(@Body() dto: CreateTypeEventDto) {
    return this.typeEventService.create(dto);
  }

  @Get()
  findAll() {
    return this.typeEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeEventService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTypeEventDto) {
    return this.typeEventService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.typeEventService.remove(id);
  }
}
