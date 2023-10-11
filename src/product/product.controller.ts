import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiResponse } from 'src/common/models/api-response.model';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  async getProducts(
    @Query('category_id') category_id: number,): Promise<ApiResponse<Product[]>> {
      if(category_id == undefined){
        return {
          success: false,
          message: 'category_id is needed',
          data: null,
        };
      }

    const data = await this.productService.findAll({
      category_id,
    });
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string,
  ): Promise<ApiResponse<Product | null>> {
    const data = await this.productService.findOne(id);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ApiResponse<Product>> {
    const data = await this.productService.create(createProductDto);
    return {
      success: data != undefined,
      message: null,
      data: data,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ApiResponse<never>> {
    await this.productService.remove(id);
    return {
      success: true,
      message: null,
      data: null,
    };
  }
}
