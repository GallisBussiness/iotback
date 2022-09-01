import { IsString } from 'class-validator';

export class CreateTypeDto {
  @IsString()
  nom: string;
}
