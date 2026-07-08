import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeReportDto } from './create-type-report.dto';

export class UpdateTypeReportDto extends PartialType(CreateTypeReportDto) {}
