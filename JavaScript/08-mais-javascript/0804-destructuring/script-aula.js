// const cliente = {
//   nome: 'Andre',
//   compras: 10,
//   email: 'andre@gmail.com'
// }

// const {nome: nomeAndre, email = 'email@gmail.com'} = cliente;

// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;


// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 

// console.log(segundo);

// function handleKeyboard({key, keyCode}) {
//   console.log(key, keyCode);
// }

// document.addEventListener('keyup', handleKeyboard);

// ==============================

// Parâmetro Padrão
function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}

// console.log(perimetroForma(10, 4));
// console.log(perimetroForma(10));


// Parâmetro Padrão ES6+ 
function perimetroForma(lado, totalLados = 4) {
  return lado * totalLados;
}

// console.log(perimetroForma(10, 5));
// console.log(perimetroForma(10));


// Arguments
function perimetroForma(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}

// console.log(perimetroForma(10, 5));
// console.log(perimetroForma(10, 4, 20));


// Parâmetro Rest
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => console.log(ganhador + ' ganhou'));
}

// anunciarGanhadores('Pedro', 'Marta', 'Maria');


// Único Rest
function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => console.log(ganhador + ' ganhou um ' + premio));
}

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');


// Rest vs Arguments
function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');


// Operador Spread
const frutas = [' Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

// console.log(comidas);


// Spread Argument
const numeroMaximo = Math.max(4, 54, 4, 23, 356, 35, 25, 245);

const listaNumeros = [2, 4, 56, 7, 24, 563, 6, 54];

const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);


// Transformar em Array
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

console.log(btnsArray);
console.log(fraseArray);