function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto']
anunciarGanhadores('Carro', ...ganhadores);


const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

const todosOsNumeros = [3,4,5,12,3,3,24,2,3,4];
const numeroMaximo = Math.max(...todosOsNumeros);

console.log(numeroMaximo);

const btns = document.querySelectorAll('button');

console.log(btns)

const btnsArray = [...btns];

console.log(btnsArray);

// =============================

// function perimetroForma(lado, totalLados = 4) {
//   const argArray = Array.from(arguments);
//   argArray.forEach(arg => console.log(arg));
//   console.log(argArray);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 4));
// // console.log(perimetroForma(10));


// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   console.log(arguments);
//   listaArgumentos.forEach(item => console.log(item));
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 4, 30, 'oi', 'teste'));
// console.log(perimetroForma(10));


// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio);
//   });
// }

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');


// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas, 'Pizza', ...legumes];
// console.log(comidas);


// const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5);

// const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
// const numeroMaximoSpread = Math.max(...listaNumeros);

// console.log(numeroMaximoSpread);


// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio);
//   });
// }

// const ganhadores = ['Pedro', 'Marta', 'Maria']

// anunciarGanhadores('Carro', ...ganhadores);



// const btns = document.querySelectorAll('button');

// console.log(btns);

// const btnArray = [...btns];
// console.log(btnArray);