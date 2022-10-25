import { Module } from '@nestjs/common';
import { PhService } from './ph.service';
import { PhController } from './ph.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ph, PhSchema } from './entities/ph.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Ph.name, useFactory: () => {
    const schema = PhSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [PhController],
  providers: [PhService],
  exports: [PhService]
})
export class PhModule {}
