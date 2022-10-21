import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'src/type/entities/type.entity';
import { Document, Types } from 'mongoose';
import { Noeud } from 'src/noeud/entities/noeud.entity';

export type CapteurDocument = Capteur & Document;

@Schema({ timestamps: true })
export class Capteur {
  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: Types.ObjectId, ref: Type.name, required: true, autopopulate: true })
  type: string;

  @Prop({ type: Types.ObjectId, ref: Noeud.name, required: true, autopopulate: true })
  noeud: string;
}

export const CapteurSchema = SchemaFactory.createForClass(Capteur);
