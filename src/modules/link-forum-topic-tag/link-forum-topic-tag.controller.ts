import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LinkForumTopicTagService } from './link-forum-topic-tag.service';
import { CreateLinkForumTopicTagDto } from './dto/create-link-forum-topic-tag.dto';

@Controller('link-forum-topic-tag')
export class LinkForumTopicTagController {
  constructor(private readonly service: LinkForumTopicTagService) {}

  @Post()
  create(@Body() dto: CreateLinkForumTopicTagDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':idForumTopic/:idTag')
  findOne(
    @Param('idForumTopic', ParseIntPipe) idForumTopic: number,
    @Param('idTag', ParseIntPipe) idTag: number,
  ) {
    return this.service.findOne(idForumTopic, idTag);
  }

  @Delete(':idForumTopic/:idTag')
  remove(
    @Param('idForumTopic', ParseIntPipe) idForumTopic: number,
    @Param('idTag', ParseIntPipe) idTag: number,
  ) {
    return this.service.remove(idForumTopic, idTag);
  }
}
