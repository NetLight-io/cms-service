import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('cal')
  cal(payload: ICalPayload): string {
    console.log(payload)
    return this.appService.cal(+payload.a ,+payload.b);
  }
}

interface ICalPayload {
  a: number,
  b: number,
  userID: string,
}
