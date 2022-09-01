import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'src/type/entities/type.entity';
import { Document, Types } from 'mongoose';
import { Champ } from 'src/champs/entities/champ.entity';

export type CapteurDocument = Capteur & Document;

@Schema({ timestamps: true })
export class Capteur {
  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: Number, required: true, default: 0 })
  valeur: string;

  @Prop({ type: Types.ObjectId, ref: Type.name, required: true })
  type: string;

  @Prop({ type: Types.ObjectId, ref: Champ.name, required: true })
  champ: string;
}

export const CapteurSchema = SchemaFactory.createForClass(Capteur);
