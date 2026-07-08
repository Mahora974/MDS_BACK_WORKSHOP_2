import { Module } from '@nestjs/common';
import { TypeTopicController } from './type-topic.controller';
import { TypeTopicService } from './type-topic.service';

@Module({
  controllers: [TypeTopicController],
  providers: [TypeTopicService],
})
export class TypeTopicModule {}
