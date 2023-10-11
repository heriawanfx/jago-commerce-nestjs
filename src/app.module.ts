import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';
import { CategoryModule } from './category/category.module';

const defaultOption: SequelizeModuleOptions = {
  dialect: 'mysql',
  port: 3306,
  username: 'root',
  password: '',
  synchronize: true,
};

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...defaultOption,
      host: 'localhost',
      database: 'db_jagocommerce',
      autoLoadModels: true,
    }),
    BannerModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
