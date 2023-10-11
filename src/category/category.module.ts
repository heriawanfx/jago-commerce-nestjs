import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './models/category.model';

@Module({
    imports: [SequelizeModule.forFeature([Category])],
    exports: [SequelizeModule],
    providers: [CategoryService],
    controllers: [CategoryController],
  })
export class CategoryModule {}
