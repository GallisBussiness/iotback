import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Capteur } from "src/capteur/entities/capteur.entity";
import { Document } from "mongoose";

export type HsolDocument = Hsol & Document;

@Schema({timestamps: true})
export class Hsol {
    @Prop({type: Number, required: true})
    valeur: number;

    @Prop({type: Types.ObjectId, required: true, ref: Capteur.name, autopopulate: true})
    capteur: string;
}

export const HsolSchema = SchemaFactory.createForClass(Hsol);
