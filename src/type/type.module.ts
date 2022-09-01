import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { Type, TypeSchema } from './entities/type.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
    CaslModule,
  ],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
