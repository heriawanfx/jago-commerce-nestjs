export class CreateProductDto {
    name: string;
    price: number;
    image_url?: string;
    description?: string;

    category_id: number;
    user_id: number;
  }
  