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
import { TypeReportService } from './type-report.service';
import { CreateTypeReportDto } from './dto/create-type-report.dto';
import { UpdateTypeReportDto } from './dto/update-type-report.dto';

@Controller('type-reports')
export class TypeReportController {
  constructor(private readonly typeReportService: TypeReportService) {}

  @Post()
  create(@Body() dto: CreateTypeReportDto) {
    return this.typeReportService.create(dto);
  }

  @Get()
  findAll() {
    return this.typeReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeReportService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTypeReportDto) {
    return this.typeReportService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.typeReportService.remove(id);
  }
}
