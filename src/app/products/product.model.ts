import {Category} from './../categories/category.model';
import {BaseModel} from '../base.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'>;

/* export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
} */

/* export interface  Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: {
    id: string | number;
    name: string;
  }
} */
