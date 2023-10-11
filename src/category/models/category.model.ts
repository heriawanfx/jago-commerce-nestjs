import { Column, Model, Table } from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface CategoryAttributes {
  id: number;
  name: string;
  description?: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {
  @Column
  name: string;

  @Column
  description: string;
}
