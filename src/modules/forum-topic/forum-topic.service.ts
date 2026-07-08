import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateForumTopicDto } from './dto/create-forum-topic.dto';
import { UpdateForumTopicDto } from './dto/update-forum-topic.dto';

@Injectable()
export class ForumTopicService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateForumTopicDto) {
    return this.prisma.forumTopic.create({ data });
  }

  findAll() {
    return this.prisma.forumTopic.findMany();
  }

  async findOne(id: number) {
    const forumTopic = await this.prisma.forumTopic.findUnique({ where: { id } });
    if (!forumTopic) throw new NotFoundException(`ForumTopic ${id} introuvable`);
    return forumTopic;
  }

  update(id: number, data: UpdateForumTopicDto) {
    return this.prisma.forumTopic.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.forumTopic.delete({ where: { id } });
  }
}
