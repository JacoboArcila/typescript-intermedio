import {Product} from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const updateProduct = (id: string, changes: Product) => {
  //code
}

export const removeProduct = (id: string) => {

}

export const getProduct = (id: string) => {

}
