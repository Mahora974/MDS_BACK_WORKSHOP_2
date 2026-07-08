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
import { TypeTopicService } from './type-topic.service';
import { CreateTypeTopicDto } from './dto/create-type-topic.dto';
import { UpdateTypeTopicDto } from './dto/update-type-topic.dto';

@Controller('type-topics')
export class TypeTopicController {
  constructor(private readonly typeTopicService: TypeTopicService) {}

  @Post()
  create(@Body() dto: CreateTypeTopicDto) {
    return this.typeTopicService.create(dto);
  }

  @Get()
  findAll() {
    return this.typeTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeTopicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTypeTopicDto) {
    return this.typeTopicService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.typeTopicService.remove(id);
  }
}
