import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './models/product.model';

@Module({
    imports: [SequelizeModule.forFeature([Product])],
    exports: [SequelizeModule],
    providers: [ProductService],
    controllers: [ProductController],
  })
export class ProductModule {}
