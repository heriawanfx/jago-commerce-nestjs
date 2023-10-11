import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  findOne(id: string): Promise<Category | null> {
    return this.categoryModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryModel.create({
      name: createCategoryDto.name,
      description: createCategoryDto.description
    });
  }

  async remove(id: string): Promise<void> {
    const category = await this.findOne(id);
    await category?.destroy();
  }
}
