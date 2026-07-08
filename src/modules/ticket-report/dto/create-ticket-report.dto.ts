import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTicketReportDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  idReporter: number;

  @IsInt()
  idTypeReport: number;
}
