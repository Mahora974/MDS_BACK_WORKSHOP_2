import { Module } from '@nestjs/common';
import { RetardsController } from './retards.controller';
import { RetardsService } from './retards.service';

@Module({
  controllers: [RetardsController],
  providers: [RetardsService],
})
export class RetardsModule {}