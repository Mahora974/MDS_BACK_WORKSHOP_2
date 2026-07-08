import { IsInt } from 'class-validator';

export class CreateWorkAtDto {
  @IsInt()
  idUser: number;

  @IsInt()
  idSchool: number;
}
