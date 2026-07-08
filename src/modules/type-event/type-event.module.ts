import { Module } from '@nestjs/common';
import { TypeEventController } from './type-event.controller';
import { TypeEventService } from './type-event.service';

@Module({
  controllers: [TypeEventController],
  providers: [TypeEventService],
})
export class TypeEventModule {}
