import { Module } from '@nestjs/common';
import { TDOptionsController } from './tdoptions.controller';
import { TDOptionsService } from './tdoptions.service';

@Module({
  controllers: [TDOptionsController],
  providers: [TDOptionsService],
})
export class TDOptionsModule {}