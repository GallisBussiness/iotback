import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AgriculteurDocument = Agriculteur & Document;

@Schema({timestamps: true})
export class Agriculteur {
  @Prop({ type: String, unique: true, required: true })
  tel: string;

  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, required: true })
  password: string;
}


export const AgriculteurSchema = SchemaFactory.createForClass(Agriculteur);