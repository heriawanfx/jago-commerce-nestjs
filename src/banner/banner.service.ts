import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBannerDto } from './dto/create-banner.dto';
import { Banner } from './models/banner.model';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel(Banner)
    private bannerModel: typeof Banner,
  ) {}

  async findAll(): Promise<Banner[]> {
    return this.bannerModel.findAll();
  }

  findOne(id: string): Promise<Banner | null> {
    return this.bannerModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createBannerDto: CreateBannerDto): Promise<Banner> {
    return this.bannerModel.create({
      name: createBannerDto.name,
      banner_url: createBannerDto.banner_url,
      is_enable: true,
    });
  }

  async remove(id: string): Promise<void> {
    const banner = await this.findOne(id);
    await banner?.destroy();
  }
}
