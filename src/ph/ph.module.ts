import { Module } from '@nestjs/common';
import { PhService } from './ph.service';
import { PhController } from './ph.controller';

@Module({
  controllers: [PhController],
  providers: [PhService]
})
export class PhModule {}
