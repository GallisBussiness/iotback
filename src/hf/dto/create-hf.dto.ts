import { IsNumber, IsString } from "class-validator";

export class CreateHfDto {
    @IsNumber()
    valeur: number;

    @IsString()
    capteur: string;
}
