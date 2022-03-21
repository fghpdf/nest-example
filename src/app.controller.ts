import { Controller, Get, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
@Injectable()
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get<string>("database.host"));
    return this.appService.getHello();
  }
}
