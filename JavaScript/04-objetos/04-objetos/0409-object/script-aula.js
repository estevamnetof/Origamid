// const pessoa = new Object({
//   nome: 'André',
// })

// document.write(pessoa);
// console.log(pessoa);

// const carro = {
//   marca: 'Marca',
//   rodas: 4,
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro);
// honda.marca = 'Honda';


// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda');

// console.log(honda);
// // honda.marca = 'Honda';
// // honda.init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());


// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou'
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto)


// const moto = {
//   capacete: true
// }

// Object.defineProperties(moto, {
//   rodas: {
//     // value: 2,
//     // configurable: false,
//     // writable: true,
//     enumerable: true,
//     get() {
//         return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + ' Total Rodas'
//     },
//   }
// });

// console.log(moto)

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

// console.log(Object.getOwnPropertyDescriptors(moto));

// // Lista com métodos e propriedades e Array
// console.log(Object.getOwnPropertyDescriptors(Array));

// // Lista com métodos e propriedades do protótipo de Array
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));

// // Puxa de uma única propriedade
// console.log(Object.getOwnPropertyDescriptors(window));

// console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));


// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// console.log(Object.is(frutas1, frutas2));

// const novaFruta = frutas1;

// novaFruta[0] = 'Uva';

// console.log(Object.is(frutas1, novaFruta));

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// Object.seal(carro)
// carro.portas = 4;
// delete carro.marca

// carro.marca = 'Honda'

// console.log(carro)
// console.log(Object.isFrozen(carro));

// const frutas = ['Banana', 'Uva'];
// const frase = 'Oi frase';
// const somar = function(a, b) {
//   return a + b
// };
// const carro = {
//   marca: 'Ford'
// }

// console.log(frutas.toString());
// console.log(frase.toString());
// console.log(somar.toString());
// console.log(carro.toString());

// // Verificar tipo de objeto
// console.log(Object.prototype.toString.call(frutas));

// ======================== AULA ==========================

// Object
const pessoa = new Object({
    nome: 'André',
  });
  
  console.log(pessoa);
  
  // Métodos de Object
  const carro = {
    rodas: 4,
    init(valor) {
      this.marca = valor;
      return this;
    },
    acelerar() {
      return this.marca + ' acelerou';
    },
    buzinar() {
      return this.marca + ' buzinou';
    }
  }
  
  const honda = Object.create(carro).init('Honda');
  
  console.log(honda);
  
  console.log(honda.acelerar())
  
  const ferrari = Object.create(carro).init('Ferrari');
  
  console.log(ferrari.acelerar());
  
  // Object.assign()
  const funcaoAutomovel = {
    acelerar() {
      return 'acelerou';
    },
    buzinar() {
      return 'buzinou';
    },
  }
  
  const moto = {
    rodas: 2,
    capacete: true,
  }
  
  Object.assign(moto, funcaoAutomovel);
  
  console.log(moto);
  
  
  // Object.defineProperties()
  const moto1 = {
    capacete: true,
  }
  
  Object.defineProperties(moto1, {
    rodas: {
      // value: 2,
      // configurable: false,
      // writable: true,
      // enumerable: false,
      get() {
        return this._rodas;
      },
      set(valor) {
        this._rodas = valor * 4
      }
    }
  });
  
  console.log(moto1)
  
  // Object.getOwnPropertyDescriptors(obj)
  Object.getOwnPropertyDescriptors(Array);
  
  // Object.keys(obj), Object.values(obj)Object.entries(obj)
  Object.keys(Array);
  
  Object.values(moto);
  
  Object.entries(moto);
  
  
  // Object.getOwnPropertyNames(obj)
  Object.getOwnPropertyNames(Array);
  Object.getOwnPropertyNames(Array.prototype);
  
  const carro1 = {
    marca: 'Ford',
    ano: 2018,
  }
  
  Object.getOwnPropertyNames(carro1);
  
  // Object.getPrototypeOf() e Object.is()
  const frutas = ['Banana', 'Pêra'];
  Object.getPrototypeOf(frutas);
  Object.getPrototypeOf('');
  
  const frutas1 = ['Banana', 'Pêra'];
  const frutas2 = ['Banana', 'Pêra'];
  
  Object.is(frutas1, frutas2);
  
  // Object.freeze(), Object.seal(), Object.preventExtensions()
  const carro2 = {
    marca: 'Ford',
    ano: 2018,
  }
  
  Object.freeze(carro);
  Object.seal(carro);
  
  carro2.marca = 'Honda'
  
  console.log(carro2)
  
  // Propriedades e Métodos do Protótipo
  const frutas3 = ['Banana', 'Uva'];
  console.log(frutas3.constructor);
  
  const frase = 'Isso é uma string';
  console.log(frase.constructor.prototype);
  
  
  // {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
  const frutas4 = ['Banana', 'Uva'];
  
  console.log(frutas4.hasOwnProperty('map'));
  console.log(Array.hasOwnProperty('map'));
  console.log(Array.prototype.hasOwnProperty('map'));
  
  console.log(Array.prototype.propertyIsEnumerable('map'));
  console.log(window.propertyIsEnumerable('innerHeight'));
  
  
  // {}.isPrototypeOf(valor)
  const frutas5 = ['Banana', 'Uva'];
  
  console.log(Array.prototype.isPrototypeOf(frutas));
  
  // {}.toString()
  const frase1 = 'Oi frase';
  const somar = function(a, b) {
    return a + b
  }
  
  const carro3 = {
    marca: 'Ford',
    ano: 2018
  }
  
  console.log(frutas.toString());
  console.log(frase1.toString());
  console.log(somar.toString());
  console.log(carro3.toString());
  
  // Verificar qual é o tipo do objeto: 
  console.log(Object.prototype.toString.call(frutas));