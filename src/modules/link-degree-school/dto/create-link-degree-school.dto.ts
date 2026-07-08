import { IsInt } from 'class-validator';

export class CreateLinkDegreeSchoolDto {
  @IsInt()
  idDegree: number;

  @IsInt()
  idSchool: number;
}
