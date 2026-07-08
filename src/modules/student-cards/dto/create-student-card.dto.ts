import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStudentCardDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  number: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  qrCode: string;

  @IsInt()
  idStudent: number;
}
