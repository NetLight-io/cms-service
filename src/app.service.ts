import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  cal(a : number, b: number): string {
    let total = a + b;
    return total.toString();
  }
}
