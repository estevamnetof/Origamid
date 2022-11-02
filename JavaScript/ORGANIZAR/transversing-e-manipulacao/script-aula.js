const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// h1.outerHTML = '<p>Novo Título</p>';
// console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelector('li:last-child'));


console.log(lista.previusSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector(('.titulo'));

const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais, titulo);

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Esse é o meu texto'
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);

console.log(novoh1);


const primeiroh1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = primeiroh1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);