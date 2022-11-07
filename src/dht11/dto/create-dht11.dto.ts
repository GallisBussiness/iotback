import { IsMongoId, IsNumber, IsOptional } from "class-validator";

export class CreateDht11Dto {

    @IsOptional()
    @IsNumber()
    temperature?: number;

    @IsOptional()
    @IsNumber()
    humidite?: number;

    @IsOptional()
    @IsNumber()
    valeur?: number;

    @IsMongoId()
    capteur: string;
}
