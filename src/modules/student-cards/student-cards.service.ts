import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStudentCardDto } from './dto/create-student-card.dto';
import { UpdateStudentCardDto } from './dto/update-student-card.dto';

@Injectable()
export class StudentCardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateStudentCardDto) {
    return this.prisma.studentCard.create({ data });
  }

  findAll() {
    return this.prisma.studentCard.findMany();
  }

  async findOne(id: number) {
    const studentCard = await this.prisma.studentCard.findUnique({
      where: { id },
    });
    if (!studentCard)
      throw new NotFoundException(`StudentCard ${id} introuvable`);
    return studentCard;
  }

  update(id: number, data: UpdateStudentCardDto) {
    return this.prisma.studentCard.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.studentCard.delete({ where: { id } });
  }
}
