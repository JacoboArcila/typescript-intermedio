//Jaco => [J, a, c, o] => string => string[]
//[J, a, c, o] => Jaco => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Jaco');
console.log('rtaArray','Jaco => ', rtaArray);

const rtaString = parseStr(['J', 'a', 'c', 'o']);
console.log('rtaString',"['J', 'a', 'c', 'o'] =>" , rtaString);
