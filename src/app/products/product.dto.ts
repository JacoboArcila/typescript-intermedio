import {Product} from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;
