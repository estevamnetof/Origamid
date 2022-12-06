// Function Declaration
// function somar(a, b) {
//     return a + b;
// }

// console.log(somar(2,4));

// Function Expression
// const somar = function(a, b) {
//     return a + b;
// }

// console.log(somar(4, 2));

// Arrow Function
const somar = (a, b) => a + b;
console.log(somar(4, 6));

const quadrado = a => a * a;
console.log(quadrado(2));


// IIFE 
// const instrumentos = 'Violão';

// (function() {
//     const instrumentos = 'Guitarra'
//     console.log(instrumentos);
// })()

// console.log(instrumentos);


// IIFE Arrow Function
const instrumento = 'Violão';

(() => {
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);
