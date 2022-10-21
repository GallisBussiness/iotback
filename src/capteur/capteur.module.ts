import { Module } from '@nestjs/common';
import { CapteurService } from './capteur.service';
import { CapteurController } from './capteur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Capteur, CapteurSchema } from './entities/capteur.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{ name: Capteur.name, useFactory: () => {
      const schema = CapteurSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    } }]),
    CaslModule,
  ],
  controllers: [CapteurController],
  providers: [CapteurService],
})
export class CapteurModule {}
