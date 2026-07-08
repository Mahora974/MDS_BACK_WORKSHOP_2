import { Module } from '@nestjs/common';
import { IcalsController } from './icals.controller';
import { IcalsService } from './icals.service';

@Module({
  controllers: [IcalsController],
  providers: [IcalsService],
})
export class IcalsModule {}