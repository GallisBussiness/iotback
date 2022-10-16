import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CultureDocument = Culture & Document;

@Schema({ timestamps: true })
export class Culture {
  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: Number, required: true })
  phsolmin: number;

  @Prop({ type: Number, required: true })
  phsolmax: number;

  @Prop({ type: Number, required: true })
  humiditesolmin: number;

  @Prop({ type: Number, required: true })
  humiditesolmax: number;

  @Prop({ type: Number, required: true })
  humiditefeuille: number;

  @Prop({ type: String })
  description: string;
}

export const CultureSchema = SchemaFactory.createForClass(Culture);
