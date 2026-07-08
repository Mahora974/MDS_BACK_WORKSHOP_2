import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';

@Injectable()
export class TutorialService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTutorialDto) {
    return this.prisma.tutorial.create({ data });
  }

  findAll() {
    return this.prisma.tutorial.findMany();
  }

  async findOne(id: number) {
    const tutorial = await this.prisma.tutorial.findUnique({ where: { id } });
    if (!tutorial) throw new NotFoundException(`Tutorial ${id} introuvable`);
    return tutorial;
  }

  update(id: number, data: UpdateTutorialDto) {
    return this.prisma.tutorial.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.tutorial.delete({ where: { id } });
  }
}
