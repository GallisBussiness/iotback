import { Module } from '@nestjs/common';
import { ChampsService } from './champs.service';
import { ChampsController } from './champs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Champ, ChampSchema } from './entities/champ.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{ name: Champ.name, useFactory: () => {
      const schema = ChampSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    } }]),
  ],
  controllers: [ChampsController],
  providers: [ChampsService],
})
export class ChampsModule {}
