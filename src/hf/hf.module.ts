import { Module } from '@nestjs/common';
import { HfService } from './hf.service';
import { HfController } from './hf.controller';

@Module({
  controllers: [HfController],
  providers: [HfService]
})
export class HfModule {}
