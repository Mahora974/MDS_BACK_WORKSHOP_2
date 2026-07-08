import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentCardDto } from './create-student-card.dto';

export class UpdateStudentCardDto extends PartialType(CreateStudentCardDto) {}
