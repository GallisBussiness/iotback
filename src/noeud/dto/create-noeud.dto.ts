import { IsMongoId, IsString } from "class-validator";

export class CreateNoeudDto {
    @IsString()
    name: string;

    @IsMongoId()
    champ: string;

    @IsMongoId()
    culture: string;
}
