import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};


//Product['id'] con esta sentencia obtenemos es el tipado no el valor.
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  //code
  //dto.tags = [];
  /* dto.tags?.pop();
  dto.tags?.push();
  dto.tags?.unshift(); */

  return products
};

