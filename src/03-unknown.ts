let anyVar: any;
anyVar = 12;
anyVar = 'dsfs';
anyVar = {};

let isNew: boolean = anyVar;

let unknowVar: unknown;
unknowVar = 12;
unknowVar = 'dsfs';
unknowVar = {};

//de esta manera validamos que es un string y activa todas las recomendaciones de metodos.
if(typeof unknowVar == 'string') {
  unknowVar.toUpperCase();
}

if(typeof unknowVar == 'boolean') {
  let isNewV2: boolean = unknowVar;
}


const parse = (str: string): unknown => {
  return JSON.parse(str);
}


console.log(unknowVar);


