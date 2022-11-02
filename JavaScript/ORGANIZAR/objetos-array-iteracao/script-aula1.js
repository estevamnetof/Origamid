// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) => {
//     console.log(item.toLocaleUpperCase());
// }) 

// console.log(carros);



// const li = document.querySelectorAll('li');

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item) {
//     item.classList.add('ativa');
// });


// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) => {
//     array[index] = 'Carro ' + item;
// });


// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//     return 'Carro ' + item;
// });


// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map(n => n * 3);


// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const tempoAulas = aulas.map(aula => aula.min);

// const puxarNomes = aula => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);

// console.log(tempoAulas)


// const aulas = [10, 25, 30];
// const total1 = aulas.reduce((acumulador, atual) => {
//     return acumulador + atual;
// })

// const total2 = aulas.reduce((acc, cur) => acc + cur, 100);

// console.log(total1);
// console.log(total2);


// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//     return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);


// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);

// console.log(frutasRight);


// const frutas = ['Banana', 'Pêra', 'Uva'];
// const temUva = frutas.some((fruta) => {
//     return fruta === 'Uva';
// });

// console.log(temUva);

// function maiorQue100(numero) {
//     return numero > 100;
// }

// const numeros = [0, 43, 22, 88, 101, 2];
// const temMaior = numeros.some(maiorQue100);



// const frutas = ['Banana', 'Pêra', 'Uva', ''];

// const arraysCheias = frutas.every((fruta) => {
//     return fruta;
// });

// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(x => x > 3);



// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const buscaUva = frutas.findIndex((fruta) => {
//     return fruta === 'Uva';
// });

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45);


// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//     return fruta
// });

// console.log(frutas);
// console.log(arrayLimpa);

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45);

// console.log(numeros);
// console.log(buscaMaior45);



// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const maiores15 = aulas.filter((aula) => {
//     return aula.min >= 15;
//   })
  
//   console.log(maiores15)