import { Module } from '@nestjs/common';
import { ForumMessageController } from './forum-message.controller';
import { ForumMessageService } from './forum-message.service';

@Module({
  controllers: [ForumMessageController],
  providers: [ForumMessageService],
})
export class ForumMessageModule {}
