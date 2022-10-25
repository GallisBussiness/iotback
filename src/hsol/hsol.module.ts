import { Module } from '@nestjs/common';
import { HsolService } from './hsol.service';
import { HsolController } from './hsol.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hsol, HsolSchema } from './entities/hsol.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Hsol.name, useFactory: () => {
    const schema = HsolSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [HsolController],
  providers: [HsolService],
  exports: [HsolService]
})
export class HsolModule {}
