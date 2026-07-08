import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateForumMessageDto } from './dto/create-forum-message.dto';
import { UpdateForumMessageDto } from './dto/update-forum-message.dto';

@Injectable()
export class ForumMessageService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateForumMessageDto) {
    return this.prisma.forumMessage.create({ data });
  }

  findAll() {
    return this.prisma.forumMessage.findMany();
  }

  async findOne(id: number) {
    const forumMessage = await this.prisma.forumMessage.findUnique({ where: { id } });
    if (!forumMessage) throw new NotFoundException(`ForumMessage ${id} introuvable`);
    return forumMessage;
  }

  update(id: number, data: UpdateForumMessageDto) {
    return this.prisma.forumMessage.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.forumMessage.delete({ where: { id } });
  }
}
