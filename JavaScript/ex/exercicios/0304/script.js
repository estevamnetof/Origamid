// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(valorAtual, index, array) {
//     console.log(valorAtual)
//     console.log(index)
//     console.log(array)
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item) {
//     console.log(item);
// });

// imgs.forEach(item => {
//     console.log(item);
// });

// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// imgs.forEach(item =>
//     console.log(item)
// );




// Mostre no console cada parágrafo do site
// Mostre o texto dos parágrafos no console
const paragrafos = document.querySelectorAll('p');
const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach((item) => {
    console.log(item)
});

// Como corrigir os erro abaixo::
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log((item, index));
});

let i = 0;
imgs.forEach(() => {
    console.log(i++)
});