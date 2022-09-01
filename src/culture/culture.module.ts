import { Module } from '@nestjs/common';
import { CultureService } from './culture.service';
import { CultureController } from './culture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Culture, CultureSchema } from './entities/culture.entity';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Culture.name, schema: CultureSchema }]),
    CaslModule,
  ],
  controllers: [CultureController],
  providers: [CultureService],
})
export class CultureModule {}
