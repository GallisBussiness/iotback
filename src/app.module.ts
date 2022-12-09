import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CapteurModule } from './capteur/capteur.module';
import { UserModule } from './user/user.module';
import { ChampsModule } from './champs/champs.module';
import { CultureModule } from './culture/culture.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthMiddleware } from './auth/auth.middleware';
import { TypeModule } from './type/type.module';
import { NoeudModule } from './noeud/noeud.module';
import { Dht11Module } from './dht11/dht11.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SerialPortModule } from './serial-port/serial-port.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
    SerialPortModule.forRoot(
      // { path: '/dev/tty-usbserial1',baudRate: 9600}
      ),
    EventEmitterModule.forRoot(),
    CapteurModule,
    UserModule,
    ChampsModule,
    CultureModule,
    TypeModule,
    NoeudModule,
    Dht11Module,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
