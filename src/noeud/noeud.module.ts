import { Module } from '@nestjs/common';
import { NoeudService } from './noeud.service';
import { NoeudController } from './noeud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Noeud, NoeudSchema } from './entities/noeud.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Noeud.name, useFactory: () => {
    const schema = NoeudSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [NoeudController],
  providers: [NoeudService]
})
export class NoeudModule {}
