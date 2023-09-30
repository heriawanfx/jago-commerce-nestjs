import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Banner } from './models/banner.model';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';

@Module({
  imports: [SequelizeModule.forFeature([Banner])],
  exports: [SequelizeModule],
  providers: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
