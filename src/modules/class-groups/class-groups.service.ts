import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';

@Injectable()
export class ClassGroupsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateClassGroupDto) {
    return this.prisma.classGroup.create({ data });
  }

  findAll() {
    return this.prisma.classGroup.findMany();
  }

  async findOne(id: number) {
    const classGroup = await this.prisma.classGroup.findUnique({
      where: { id },
    });
    if (!classGroup) throw new NotFoundException(`ClassGroup ${id} introuvable`);
    return classGroup;
  }

  update(id: number, data: UpdateClassGroupDto) {
    return this.prisma.classGroup.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.classGroup.delete({ where: { id } });
  }
}
