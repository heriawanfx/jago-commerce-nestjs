import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      port: parseInt(process.env.DB_PORT as string) as number,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      synchronize: true,
      host: 'localhost',
      database: 'db_jagocommerce',
      autoLoadModels: true,
    }),
    BannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
