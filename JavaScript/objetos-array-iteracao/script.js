// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);


// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach((item, index) => {
//     item.classList.add('ativa' + index)
// });

// console.log(retornoForeach)


// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//     return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosx2 = numeros.map(n => n * 2)

// console.log(numerosx2);

// console.log(novaArray);
// console.log(carros)



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

// const nomeAulas = aula => aula.nome;

// const NomeAulas = aulas.map(function(aula) {
//     return aula.nome;
// })


// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);



// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//     console.log(acumulador, item, index);
//     return acumulador + item;
// }, 0)

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     if(anterior > atual)
//         return anterior
//     else
//         return atual
// }, 0)

// console.log(maiorNumero)

