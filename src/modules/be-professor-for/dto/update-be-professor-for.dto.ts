import { IsBoolean, IsOptional } from 'class-validator';

// Les clés (idUser, idClassGroup, idCategory) ne se modifient pas : on recrée l'association.
export class UpdateBeProfessorForDto {
  @IsOptional()
  @IsBoolean()
  isReferent?: boolean;
}
