import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as cors from "cors"
import helmet from 'helmet';
import process from 'process';
import { AppModule } from './app.module';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(cors());
  app.use(compression());

  await app.listen(3003);
}
bootstrap();
