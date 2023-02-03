//Jaco => [J, a, c, o] => string => string[]
//[J, a, c, o] => Jaco => string[] => string

//sobrecarga
export function parseStr(input: string): string [];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

/* export function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); //string[]
  }
} */

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else if(typeof input === 'string' ){
    return input.split(''); //string[]
  } else if(typeof input === 'number' ){
    return true //boolean
  }
}

const rtaArray = parseStr('Jaco');
console.log('rtaArray','Jaco => ', rtaArray);

const rtaString = parseStr(['J', 'a', 'c', 'o']);
console.log('rtaString',"['J', 'a', 'c', 'o'] =>" , rtaString);

const rtaNumber = parseStr(121);
console.log('rtaNumber', rtaNumber);

