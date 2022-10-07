import { IsMongoId, IsString } from "class-validator";

export class CreateChampDto {
  
    @IsString()
    nom: string;
  
    @IsMongoId()
    user: string;
  
    @IsString()
    superficie: string;
  
    @IsMongoId()
    culture: string;
}
