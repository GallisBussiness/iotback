import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateCapteurDto {
  @IsString()
  nom: string;

  @IsNumber()
  valeur: number;

  @IsMongoId()
  type: string;

  @IsMongoId()
  champ: string;
}
