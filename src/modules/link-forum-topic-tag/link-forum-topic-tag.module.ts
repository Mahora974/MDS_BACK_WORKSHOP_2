import { Module } from '@nestjs/common';
import { LinkForumTopicTagController } from './link-forum-topic-tag.controller';
import { LinkForumTopicTagService } from './link-forum-topic-tag.service';

@Module({
  controllers: [LinkForumTopicTagController],
  providers: [LinkForumTopicTagService],
})
export class LinkForumTopicTagModule {}
