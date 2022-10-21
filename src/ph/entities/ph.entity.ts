import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Capteur } from "src/capteur/entities/capteur.entity";
import { Document } from "mongoose";

export type PhDocument = Ph & Document;

@Schema({timestamps: true})
export class Ph {
    @Prop({type: Number, required: true})
    valeur: number;

    @Prop({type: Types.ObjectId, required: true, ref: Capteur.name,autopopulate: true})
    capteur: string;
}


export const PhSchema = SchemaFactory.createForClass(Ph);