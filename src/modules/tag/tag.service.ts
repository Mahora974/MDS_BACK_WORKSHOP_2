import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTagDto) {
    return this.prisma.tag.create({ data });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (!tag) throw new NotFoundException(`Tag ${id} introuvable`);
    return tag;
  }

  update(id: number, data: UpdateTagDto) {
    return this.prisma.tag.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
