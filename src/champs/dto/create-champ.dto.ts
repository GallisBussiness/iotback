import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateChampDto {
  
    @IsString()
    nom: string;
  
    @IsMongoId()
    user: string;
  
    @IsNumber()
    superficie: number;
}
