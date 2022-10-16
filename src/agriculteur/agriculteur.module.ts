import { Module } from '@nestjs/common';
import { AgriculteurService } from './agriculteur.service';
import { AgriculteurController } from './agriculteur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Agriculteur, AgriculteurSchema } from './entities/agriculteur.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Agriculteur.name, schema: AgriculteurSchema }]),
  ],
  controllers: [AgriculteurController],
  providers: [AgriculteurService]
})
export class AgriculteurModule {}
