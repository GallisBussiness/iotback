import { Module } from '@nestjs/common';
import { HsolService } from './hsol.service';
import { HsolController } from './hsol.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hsol, HsolSchema } from './entities/hsol.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Hsol.name, schema: HsolSchema}])],
  controllers: [HsolController],
  providers: [HsolService]
})
export class HsolModule {}
