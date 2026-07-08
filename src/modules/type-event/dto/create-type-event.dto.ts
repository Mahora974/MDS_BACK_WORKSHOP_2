import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTypeEventDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
