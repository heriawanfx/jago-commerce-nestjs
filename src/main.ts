import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as cors from "cors"
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const appPortValue = configService.get<AppConfig>('app')?.port;
  const appPort = parseInt(appPortValue as string) || 3003

  app.use(helmet());
  app.use(cors());
  app.use(compression());

  await app.listen(appPort);
}
bootstrap();
