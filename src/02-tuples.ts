const prices: (string | number)[] = [1,2,3,4,5,6,"s"];
prices.push(465);
prices.push("sds");

//las tuplas sirven para tipar los arrays, ej: que en la posicion 0 si o si permita solo un string y que en la posicion
//si o si permita numero
let user: [string, number, boolean];
user = ['jacobo', 18, true];
/* user = [12, 15] */

//desestructurar
const [username, age] = user;

console.log(username, age);


