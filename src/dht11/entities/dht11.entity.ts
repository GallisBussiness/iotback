import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Capteur } from "src/capteur/entities/capteur.entity";

export type Dht11Document = Dht11 & Document;

@Schema({timestamps: true})
export class Dht11 {
    @Prop({type: Number})
    temperature: number;

    @Prop({type: Number})
    humidite: number;

    @Prop({type: Number})
    valeur: number;

    @Prop({type: Types.ObjectId, required: true, ref: Capteur.name, autopopulate: true})
    capteur: string;
}

export const Dht11Schema = SchemaFactory.createForClass(Dht11);
