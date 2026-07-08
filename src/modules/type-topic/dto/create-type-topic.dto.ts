import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTypeTopicDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
