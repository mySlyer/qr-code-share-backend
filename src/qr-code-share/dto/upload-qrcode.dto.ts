import { IsInt, IsString } from 'class-validator';

export class CreateQrCodeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly desc: string;

  @IsString()
  readonly imgUrl: string;
  
  @IsInt()
  readonly qrCodeId: number;
}