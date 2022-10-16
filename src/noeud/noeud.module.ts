import { Module } from '@nestjs/common';
import { NoeudService } from './noeud.service';
import { NoeudController } from './noeud.controller';

@Module({
  controllers: [NoeudController],
  providers: [NoeudService]
})
export class NoeudModule {}
