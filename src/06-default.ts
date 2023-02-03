export const createProduct = (
  id: string | number,
  //esto hace que sea opcional y por defecto se le asiga el true en este caso.
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    isNew: isNew,
    stock: stock,
  }
}
/*
  0 === false
  '' === false
  false === false
*/

const p1 = createProduct(1, true, 12);
console.log(p1);;

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
