import { Module } from '@nestjs/common';
import { HfService } from './hf.service';
import { HfController } from './hf.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hf, HfSchema } from './entities/hf.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{ name: Hf.name, useFactory: () => {
    const schema = HfSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [HfController],
  providers: [HfService],
  exports: [HfService]
})
export class HfModule {}
