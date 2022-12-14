const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta);
}

// for(const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(response => console.log(response));

const carro = {
  marca: 'Honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
  }
})

for(const key in carro) {
  console.log(carro[key]);
}

for(const f in frutas) {
  console.log(frutas[f]);
}

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

let i = 0;
do {
  console.log(i++);
} while(i <= 20);

// ==========================================

// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';
// const fraseArray = [...frase];


// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

// for(const fruta of frutas) {
//   console.log(fruta);
// }

// OU (mesma coisa que usar forEach)

// frutas.forEach(fruta => {
//   console.log(fruta)
// });

// for(const char of frase) {
//   console.log(char);
// }

// Spread e for...of 
// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.background = 'blue';
// }

// console.log(...buttons);


// Apenas Iteráveis
// const carro = {
//   marca: 'Honda',
//   ano: 2018,
// }

// Erro, não é iterável
// for(const propriedade of carro) {
//   consolel.log(propriedade);
// }


// for...in
// const carro = {
//   marca: 'Honda',
//   ano: 2018,
// }

// for(const propriedade in carro) {
//   console.log(propriedade);
// }



// // Array e for...in
// const frutas = ['Banana', 'Morango', 'Uva'];

// for(const index in frutas) {
//   console.log(frutas[index]);
// }


// // Chave e valor
// // const btn = document.querySelector('button');
// // const btnStyles = getComputedStyle(btn);

// // for(const style in btnStyles) {
// //   console.log(`${style}: ${btnStyles[style]}`)
// // }


// // Do / While
// let i = 0;
// do {
//   console.log(i++);
// } while (i <= 5);