import { IsNumber, IsString } from "class-validator";

export class CreatePhDto {
    @IsNumber()
    valeur: number;

    @IsString()
    capteur: string;
}
