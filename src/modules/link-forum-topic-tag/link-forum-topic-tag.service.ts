import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLinkForumTopicTagDto } from './dto/create-link-forum-topic-tag.dto';

@Injectable()
export class LinkForumTopicTagService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateLinkForumTopicTagDto) {
    return this.prisma.linkForumTopicTag.create({ data });
  }

  findAll() {
    return this.prisma.linkForumTopicTag.findMany();
  }

  async findOne(idForumTopic: number, idTag: number) {
    const link = await this.prisma.linkForumTopicTag.findFirst({
      where: { idForumTopic, idTag },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async remove(idForumTopic: number, idTag: number) {
    await this.findOne(idForumTopic, idTag);
    await this.prisma.linkForumTopicTag.deleteMany({
      where: { idForumTopic, idTag },
    });
    return { deleted: true };
  }
}
