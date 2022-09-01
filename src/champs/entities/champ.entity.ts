import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Culture } from 'src/culture/entities/culture.entity';

export type ChampDocument = Champ & Document;

@Schema({ timestamps: true })
export class Champ {
  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: Types.ObjectId, required: true })
  user: string;

  @Prop({ type: String })
  superficie: string;

  @Prop({ type: Types.ObjectId, ref: Culture.name })
  culture: string;
}

export const ChampSchema = SchemaFactory.createForClass(Champ);
