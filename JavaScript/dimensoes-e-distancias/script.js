const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
primeiroh2.offsetLeft;
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();

console.log(rect);

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight, 
    window.pageYOffset
)

