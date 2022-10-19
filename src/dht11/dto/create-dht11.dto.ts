import { IsMongoId, IsNumber } from "class-validator";

export class CreateDht11Dto {
    @IsNumber()
    temperature: number;

    @IsNumber()
    humidite: number;

    @IsMongoId()
    capteur: string;
}
