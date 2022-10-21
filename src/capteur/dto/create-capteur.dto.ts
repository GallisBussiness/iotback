import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateCapteurDto {
  @IsString()
  nom: string;

  @IsMongoId()
  type: string;

  @IsMongoId()
  noeud: string;
}
