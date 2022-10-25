import { IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateNoeudDto {
    @IsString()
    nom: string;

    @IsMongoId()
    champ: string;

    @IsOptional()
    @IsMongoId()
    culture: string;
}
