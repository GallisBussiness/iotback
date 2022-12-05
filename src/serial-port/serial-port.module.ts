import { DynamicModule, Module } from '@nestjs/common';
// import { SerialPort,SerialPortOpenOptions } from 'serialport';
import { MockBinding } from '@serialport/binding-mock';
import { SerialPortStream } from '@serialport/stream';
import { Dht11Module } from 'src/dht11/dht11.module';
import { SERIAL_PORT } from './constants';
import { SerialPortService } from './serial-port.service';

@Module({
  imports:[Dht11Module]
})
export class SerialPortModule {
  static forRoot(
    // options:SerialPortOpenOptions<any>
    ): DynamicModule {

    // const port = new SerialPort(options);

    // for testing port with mock data
    MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
    const port = new SerialPortStream({ binding: MockBinding, path: '/dev/ROBOT', baudRate: 14400 });

    return {
      module: SerialPortModule,
      providers: [{provide: SERIAL_PORT, useValue: port},
      SerialPortService
    ],
      exports: [SerialPortService],
    };
  }
}
