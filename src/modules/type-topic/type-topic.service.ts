import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeTopicDto } from './dto/create-type-topic.dto';
import { UpdateTypeTopicDto } from './dto/update-type-topic.dto';

@Injectable()
export class TypeTopicService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTypeTopicDto) {
    return this.prisma.typeTopic.create({ data });
  }

  findAll() {
    return this.prisma.typeTopic.findMany();
  }

  async findOne(id: number) {
    const typeTopic = await this.prisma.typeTopic.findUnique({ where: { id } });
    if (!typeTopic) throw new NotFoundException(`TypeTopic ${id} introuvable`);
    return typeTopic;
  }

  update(id: number, data: UpdateTypeTopicDto) {
    return this.prisma.typeTopic.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.typeTopic.delete({ where: { id } });
  }
}
