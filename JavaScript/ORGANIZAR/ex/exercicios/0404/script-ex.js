const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2022);


// const frase = 'A melhor comida';
// console.log(comida.length);
// console.log(frase.length);

// console.log(comida[0]);
// console.log(frase[frase.length - 1]);


// const linguagem = 'JavaScript';

// console.log(linguagem.charAt(0));
// console.log(linguagem.charAt(linguagem.length - 1));


// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';

// const fraseCompleta = frase.concat(linguagem, '!!');
// console.log(fraseCompleta);


const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta);

fruta.startsWith('Ba');


// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(transacao1.slice(0,3));
// console.log(transacao2.slice(0,3));
// console.log(transacao3.slice(0,3));

// console.log(transacao1.slice(12));
// console.log(transacao1.slice(-4));
// console.log(transacao1.slice(3,6));



const linguagem = 'Javascript';

console.log(linguagem.substring(3,5));
console.log(linguagem.substring(0,4));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3));



const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r'));
console.log(instrumento.lastIndexOf('r'));
console.log(instrumento.indexOf('ta'));


const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});



const frase = 'Ta';
console.log(frase.repeat(5));



// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// console.log(listaItens = listaItens.replace(/[ ]+/g, ', '));

// let preco = 'R$ 1200,43';
// console.log(preco = preco.replace(',', '.'));


const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');
console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlNovo);


// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// console.log((sexo1.toLocaleLowerCase() === 'feminino'));
// console.log((sexo2.toLocaleLowerCase() === 'feminino'));
// console.log((sexo3.toLocaleLowerCase() === 'feminino'));


const valor = ' R$23.00 ';
console.log(valor.trim().replace('.', ','));