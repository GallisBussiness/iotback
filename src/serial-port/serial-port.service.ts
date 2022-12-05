import { Injectable,Inject,HttpException,HttpStatus } from '@nestjs/common';
import { SERIAL_PORT } from './constants';
import { ReadlineParser } from '@serialport/parser-readline';
// import { SerialPort } from 'serialport';
import { SerialPortStream } from '@serialport/stream';
import { MockBindingInterface } from '@serialport/binding-mock';
import { Dht11Service } from 'src/dht11/dht11.service';

@Injectable()
export class SerialPortService {
    constructor(@Inject(SERIAL_PORT) private port: SerialPortStream<MockBindingInterface>, private readonly dht11Service: Dht11Service) {
        console.log(this.port.port.port.data.toString())    
        this.port.on('error', (err) => {
            throw new HttpException('error de connection au port serial', HttpStatus.INTERNAL_SERVER_ERROR);
        })

          const parser = new ReadlineParser();
          this.port.pipe(parser);

          this.port.on('data', (data) => {
            // this.dht11Service.create({})
            console.log(data.toString())
          })

          this.port.write('main screen turn on', function(err) {
            if (err) {
              return console.log('Error on write: ', err.message)
            }
            console.log('message written')
          })
    }
}
