const pessoa = new Object({
  nome: 'André',
})

// document.write(pessoa);
console.log(pessoa);

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

const frutas = ['Banana', 'Uva'];
const frase = 'Oi frase';
const somar = function(a, b) {
  return a + b
};
const carro = {
  marca: 'Ford'
}

console.log(frutas.toString());
console.log(frase.toString());
console.log(somar.toString());
console.log(carro.toString());

// Verificar tipo de objeto
console.log(Object.prototype.toString.call(frutas));