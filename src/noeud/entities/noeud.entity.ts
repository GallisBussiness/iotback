import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Champ } from "src/champs/entities/champ.entity";
import { Culture } from "src/culture/entities/culture.entity";
export type NoeudDocument = Noeud & Document;

@Schema({timestamps: true})
export class Noeud {
    @Prop({type: String, required: true, unique: true})
    nom: string;

    @Prop({type: Types.ObjectId, ref: Champ.name, required: true, autopopulate: true})
    champ: string;

    @Prop({ type: Types.ObjectId, ref: Culture.name, required: true, autopopulate: true })
    culture: string;
}

export const NoeudSchema = SchemaFactory.createForClass(Noeud);
