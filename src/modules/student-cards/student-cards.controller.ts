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
import { StudentCardsService } from './student-cards.service';
import { CreateStudentCardDto } from './dto/create-student-card.dto';
import { UpdateStudentCardDto } from './dto/update-student-card.dto';

@Controller('student-cards')
export class StudentCardsController {
  constructor(private readonly studentCardsService: StudentCardsService) {}

  @Post()
  create(@Body() dto: CreateStudentCardDto) {
    return this.studentCardsService.create(dto);
  }

  @Get()
  findAll() {
    return this.studentCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentCardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStudentCardDto,
  ) {
    return this.studentCardsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentCardsService.remove(id);
  }
}
