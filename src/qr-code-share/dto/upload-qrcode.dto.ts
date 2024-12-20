import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateQrCodeDto {
  @IsString()
  readonly content: string;

  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly desc?: string;
}
