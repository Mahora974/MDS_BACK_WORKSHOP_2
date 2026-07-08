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
import { ForumMessageService } from './forum-message.service';
import { CreateForumMessageDto } from './dto/create-forum-message.dto';
import { UpdateForumMessageDto } from './dto/update-forum-message.dto';

@Controller('forum-messages')
export class ForumMessageController {
  constructor(private readonly forumMessageService: ForumMessageService) {}

  @Post()
  create(@Body() dto: CreateForumMessageDto) {
    return this.forumMessageService.create(dto);
  }

  @Get()
  findAll() {
    return this.forumMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.forumMessageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateForumMessageDto) {
    return this.forumMessageService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.forumMessageService.remove(id);
  }
}
