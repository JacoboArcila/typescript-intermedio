import {Product} from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

//Partial pone todos los campos como opcionales.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//deja todo como obligatorio
type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

//ReadOnly a todos los parametros lo pones en solo lectura
type example3 = Readonly<Product>;


