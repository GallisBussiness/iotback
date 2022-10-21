import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type ChampDocument = Champ & Document;

@Schema({ timestamps: true })
export class Champ {
  @Prop({ type: String, required: true, unique: true })
  nom: string;

  @Prop({ type: Types.ObjectId, required: true, ref: User.name, autopopulate: true })
  user: string;

  @Prop({ type: Number })
  superficie: number;
}

export const ChampSchema = SchemaFactory.createForClass(Champ);
