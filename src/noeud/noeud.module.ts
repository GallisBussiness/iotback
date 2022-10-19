import { Module } from '@nestjs/common';
import { NoeudService } from './noeud.service';
import { NoeudController } from './noeud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Noeud, NoeudSchema } from './entities/noeud.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Noeud.name, schema: NoeudSchema}])],
  controllers: [NoeudController],
  providers: [NoeudService]
})
export class NoeudModule {}
