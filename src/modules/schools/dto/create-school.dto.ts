import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(125)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  city: string;

  @IsUUID()
  microsoftTenantId: string;
}
