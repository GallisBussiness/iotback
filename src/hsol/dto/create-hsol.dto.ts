import { IsNumber, IsString } from "class-validator";

export class CreateHsolDto {
    @IsNumber()
    valeur: number;

    @IsString()
    capteur: string;
}
