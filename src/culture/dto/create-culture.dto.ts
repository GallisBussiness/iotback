import { IsNumber, IsString } from 'class-validator';

export class CreateCultureDto {
  @IsString()
  nom: string;

  @IsNumber()
  phsolmin: number;

  @IsNumber()
  phsolmax: number;

  @IsNumber()
  humiditesolmin: number;

  @IsNumber()
  humiditesolmax: number;

  @IsNumber()
  humiditefeuille: number;

  @IsString()
  description: string;
}
