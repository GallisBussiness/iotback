import { Module } from '@nestjs/common';
import { HfService } from './hf.service';
import { HfController } from './hf.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hf, HfSchema } from './entities/hf.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hf.name, schema: HfSchema}])],
  controllers: [HfController],
  providers: [HfService]
})
export class HfModule {}
