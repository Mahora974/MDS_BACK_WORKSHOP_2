import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateBeProfessorForDto {
  @IsInt()
  idUser: number;

  @IsInt()
  idClassGroup: number;

  @IsInt()
  idCategory: number;

  // @default(false) en base -> optionnel
  @IsOptional()
  @IsBoolean()
  isReferent?: boolean;
}
