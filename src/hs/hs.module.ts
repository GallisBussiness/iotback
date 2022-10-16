import { Module } from '@nestjs/common';
import { HsService } from './hs.service';
import { HsController } from './hs.controller';

@Module({
  controllers: [HsController],
  providers: [HsService]
})
export class HsModule {}
