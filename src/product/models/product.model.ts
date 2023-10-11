import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Category } from 'src/category/models/category.model';

export interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  description?: string;

  category_id: number;

  user_id: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes> {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  description: string;

  @Column
  image_url: string;

  @ForeignKey(()=> Category)
  @Column
  category_id: number;

  @BelongsTo(()=> Category)
  category: Category

  @Column
  user_id: number;
}
