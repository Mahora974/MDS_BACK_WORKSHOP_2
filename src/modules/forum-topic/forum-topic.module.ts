import { Module } from '@nestjs/common';
import { ForumTopicController } from './forum-topic.controller';
import { ForumTopicService } from './forum-topic.service';

@Module({
  controllers: [ForumTopicController],
  providers: [ForumTopicService],
})
export class ForumTopicModule {}
