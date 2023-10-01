import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService) {}

  getSecretKey(): string | undefined {
    return this.configService.get('SECRET_KEY');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
