// const btn = document.querySelector('.btn');

// function activeButton() {
//     this.classList.add('active');
// }

// btn.addEventListener('click', activeButton);


// const nome = 'André';

// function somar(a, b) {
//     return a + b;
// }

// console.log(somar(2, 4));


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     btn.classList.add('ativo')
// })


// var numeros = [1, 2, 3, 4, 5]; //vetor original

// var quadrados = numeros.map((item) => {
//     return Math.pow(item, 2); //retorna o item original elevado ao quadrado
// });

// document.write(quadrados);


// var vencedores = [
//     {
//         nome: 'Equipe Super',
//         país: 'Brasil'
//     },
//     {
//         nome: 'Time Maximo',
//         país: 'EUA'
//     },
//     {
//         nome: 'Mega Grupo',
//         país: 'Canadá'
//     }
// ];

// var podioPorPais = vencedores.map((item, indice) => {
//     return item.país;
// });

// document.write(podioPorPais);


// =======================================================
// REDUCE
// =======================================================

const rockets = [
    { country: 'Russia', launches: 32},
    { country: 'US', launches: 23},
    { country: 'China', launches: 16},
    { country: 'Europe', launches: 7},
    { country: 'India', launches: 4},
    { country: 'Japan', launches: 3}
]

const totalLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);