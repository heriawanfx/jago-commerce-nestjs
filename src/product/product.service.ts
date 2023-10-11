import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductAttributes } from './models/product.model';
import { Filterable, FindOptions, WhereOptions } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async findAll(whereOption: WhereOptions<ProductAttributes> ): Promise<Product[]> {
    return this.productModel.findAll({
        where: whereOption
    });
  }

  findOne(id: string): Promise<Product | null> {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create({
      name: createProductDto.name,
      price: createProductDto.price,
      description: createProductDto.description,
      image_url: createProductDto.image_url,
      category_id: createProductDto.category_id,
      user_id: createProductDto.user_id,
    });
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await product?.destroy();
  }
}
