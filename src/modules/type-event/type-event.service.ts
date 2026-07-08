import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeEventDto } from './dto/create-type-event.dto';
import { UpdateTypeEventDto } from './dto/update-type-event.dto';

@Injectable()
export class TypeEventService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTypeEventDto) {
    return this.prisma.typeEvent.create({ data });
  }

  findAll() {
    return this.prisma.typeEvent.findMany();
  }

  async findOne(id: number) {
    const typeEvent = await this.prisma.typeEvent.findUnique({ where: { id } });
    if (!typeEvent) throw new NotFoundException(`TypeEvent ${id} introuvable`);
    return typeEvent;
  }

  update(id: number, data: UpdateTypeEventDto) {
    return this.prisma.typeEvent.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.typeEvent.delete({ where: { id } });
  }
}
