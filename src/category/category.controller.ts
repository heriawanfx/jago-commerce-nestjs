import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Category } from './models/category.model';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiResponse } from 'src/common/models/api-response.model';

@Controller('/api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategorys(): Promise<ApiResponse<Category[]>> {
    const data = await this.categoryService.findAll();
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Get(':id')
  async getCategory(
    @Param('id') id: string,
  ): Promise<ApiResponse<Category | null>> {
    const data = await this.categoryService.findOne(id);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ApiResponse<Category>> {
    const data = await this.categoryService.create(createCategoryDto);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ApiResponse<never>> {
    await this.categoryService.remove(id);
    return {
      success: true,
      message: null,
      data: null,
    };
  }
}
