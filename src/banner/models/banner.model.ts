import { Column, Model, Table } from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface BannerAttributes {
  id: number;
  name: string;
  banner_url: string;
  is_enable: boolean;
}

interface BannerCreationAttributes extends Optional<BannerAttributes, 'id'> {}

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Banner extends Model<BannerAttributes, BannerCreationAttributes> {
  @Column
  name: string;

  @Column
  banner_url: string;

  @Column({ defaultValue: true })
  is_enable: boolean;
}
