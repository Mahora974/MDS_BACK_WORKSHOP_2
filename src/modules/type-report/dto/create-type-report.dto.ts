import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTypeReportDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;
}
