import { Module } from '@nestjs/common';
import { LinkDegreeSchoolController } from './link-degree-school.controller';
import { LinkDegreeSchoolService } from './link-degree-school.service';

@Module({
  controllers: [LinkDegreeSchoolController],
  providers: [LinkDegreeSchoolService],
})
export class LinkDegreeSchoolModule {}
