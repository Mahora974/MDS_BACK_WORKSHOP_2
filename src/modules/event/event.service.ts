import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEventDto) {
    return this.prisma.event.create({ data });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  async findOne(id: number) {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event) throw new NotFoundException(`Event ${id} introuvable`);
    return event;
  }

  update(id: number, data: UpdateEventDto) {
    return this.prisma.event.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }
}
