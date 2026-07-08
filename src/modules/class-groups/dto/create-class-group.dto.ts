import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClassGroupDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsInt()
  idDegree: number;
}
