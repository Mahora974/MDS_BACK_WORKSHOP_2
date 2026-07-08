import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ForumTopicService } from './forum-topic.service';
import { CreateForumTopicDto } from './dto/create-forum-topic.dto';
import { UpdateForumTopicDto } from './dto/update-forum-topic.dto';

@Controller('forum-topics')
export class ForumTopicController {
  constructor(private readonly forumTopicService: ForumTopicService) {}

  @Post()
  create(@Body() dto: CreateForumTopicDto) {
    return this.forumTopicService.create(dto);
  }

  @Get()
  findAll() {
    return this.forumTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.forumTopicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateForumTopicDto) {
    return this.forumTopicService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.forumTopicService.remove(id);
  }
}
