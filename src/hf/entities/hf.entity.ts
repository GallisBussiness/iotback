import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Capteur } from "src/capteur/entities/capteur.entity";

export type HfDocument = Hf & Document;

@Schema({ timestamps: true })
export class Hf {
    @Prop({type: Number, required: true})
    valeur: number;

    @Prop({type: Types.ObjectId, required: true, ref: Capteur.name,autopopulate: true})
    capteur: string;
}

export const HfSchema = SchemaFactory.createForClass(Hf);
