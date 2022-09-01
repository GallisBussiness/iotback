import { Module } from '@nestjs/common';
import { ChampsService } from './champs.service';
import { ChampsController } from './champs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Champ, ChampSchema } from './entities/champ.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Champ.name, schema: ChampSchema }]),
  ],
  controllers: [ChampsController],
  providers: [ChampsService],
})
export class ChampsModule {}
