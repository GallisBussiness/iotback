import {
    Controller,Sse,
  } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
  
  @Controller('app')
  export class AppController {
    constructor(
    ) {}
  
   @Sse('data')
   data(): Observable<string> {
    return interval(1000).pipe(
        map(n => `numner ${n}`)
    );
   }
  
    
  }
  