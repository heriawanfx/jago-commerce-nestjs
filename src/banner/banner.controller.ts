import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Banner } from './models/banner.model';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { ApiResponse } from 'src/common/models/api-response.model';

@Controller('/api/banners')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async getBanners(): Promise<ApiResponse<Banner[]>> {
    const data = await this.bannerService.findAll();
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Get(':id')
  async getBanner(
    @Param('id') id: string,
  ): Promise<ApiResponse<Banner | null>> {
    const data = await this.bannerService.findOne(id);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Post()
  async create(
    @Body() createBannerDto: CreateBannerDto,
  ): Promise<ApiResponse<Banner>> {
    const data = await this.bannerService.create(createBannerDto);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ApiResponse<never>> {
    await this.bannerService.remove(id);
    return {
      success: true,
      message: null,
      data: null,
    };
  }
}
