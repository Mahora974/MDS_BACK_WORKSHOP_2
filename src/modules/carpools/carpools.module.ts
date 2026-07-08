import { Module } from '@nestjs/common';
import { CarpoolsController } from './carpools.controller';
import { CarpoolsService } from './carpools.service';

@Module({
  controllers: [CarpoolsController],
  providers: [CarpoolsService],
})
export class CarpoolsModule {}
