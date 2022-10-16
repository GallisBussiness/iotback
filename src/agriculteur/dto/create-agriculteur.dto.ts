import { IsPhoneNumber, IsString } from "class-validator";

export class CreateAgriculteurDto {
    @IsString()
    prenom: string;
  
    @IsString()
    nom: string;
  
    @IsPhoneNumber('SN')
    tel: string;
  
    @IsString()
    password: string;
}
