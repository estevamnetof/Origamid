// const perimetro = new Function('lado', 'return lado * 4');

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.name) 


// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano)
// }

// descricaoCarro.call(carro);


// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// frutas.forEach.call(carros, (item)=> {
//   console.log(item)
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }

// // const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo();

// ul.ativo('ativar')

// console.log(ul);


const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike =  {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.bind(li, (item) => {
  console.log(item);
});

console.log(filtro());

console.log(li);

const numeros = [343, 34, 43, 75, 464, 965, 35];

const $ = document.querySelectorAll.bind(document, 'li');


const carro = {
  marca: 'Ford',
  anos: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

console.log(carro);



function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70));
console.log(imc180(70));

// Retorne a soma total de caracteres dos 
// parágrafos acima utilizando reduce
// const paragrafos = document.querySelectorAll('p');

// const totalCaracteres = Array.prototype.reduce.call(paragrafos,(acumulador, item) => {
//   return acumulador + item.innerText.length
// }, 0)

// console.log(totalCaracteres);

function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');


function somar(n1 , n2) {
  return n1 + n2;
}

const carro1 = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach((item) => {
//   console.log(item);
// });


// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

const frutas2 = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas2, (item) => {
  console.log(item);
});


function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');


Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas3 = ['Uva', 'Maçã', 'Banana'];
frutas3.mostreThis();

Array.prototype.pop.call(frutas3);

const li2 = document.querySelectorAll('li');

const filtro2 = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});


const numeros3 = [3, 6, 7, 8, 10, 53];
console.log(Math.max.apply(null, numeros3));
console.log(Math.max.call(null, 3, 6, 7, 8, 10, 53));


const li4 = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro3 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro4 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
})

// Retorne a soma total de caracteres dos 
// parágrafos acima utilizando recude
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento; 
}

console.log(criarElemento('li', 'azul', 'Esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a 
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de Javascript');
const cursosHTML = h1Titulo('Cursos de HTML');

console.log(cursosJS, cursosHTML);



// Retorne a soma total de caracteres dos
// parágrafos acima utilizando o reduce
// const paragrafos = document.querySelectorAll('p');
// const arrayParagrafos = Array.from(paragrafos);

// const totalParagrafos = arrayParagrafos.reduce((acc, item) => {
//     return acc + item;
//     console.log(acc)
//     console.log(item)
// });



// ======================== AULA =============================
// function
const perimetro = new Function('lado', 'return lado * 4');

// Propriedades
function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(3,3));
console.log(somar.length);
console.log(somar.name);

// function.call()
function darOi(nome, idade) {
    console.log('Oi para você ' + nome + ' ' + idade);
}

darOi.call({}, 'Estevam', 22);

// =========

function descricaoCarro(velocidade) {
    console.log(this.marca + ' ' +this.ano + ' ' +velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);


// ========

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'pêra'];


// frutas.forEach.call(carros, (item) => {
//     console.log(item);
// });


// // Exemplo real

// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//     console.log(this);
//     this.element.classList.add(classe)
// }


// const li = {
//     element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');


// const ul = new Dom('ul');




// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');


// Array's e Call

// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas);
// frutas.pop(); // ambos jeitos são iguais, sem diferença


// // Array-like

// const arrayLike = {
//     0: 'Item 1',
//     1: 'Item 2',
//     2: 'Item 3',
//     length: 3,
// }

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const filtro = arrayLi.filter((item) => {
//     return item.classList.contains('ativo')
// });

// const filtro = Array.prototype.filter.call(li, (item) => {
//     return item.classList.contains('ativo')
// });

// console.log(filtro);

// console.log(li);


// function.apply()
// const numeros = [33, 232, 33, 434, 54, 5424, 4];
// Math.max.apply(null, numeros);


// // function.bind()
// const $ = document.querySelectorAll.bind(document, 'li');

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
//     acelerar: function(aceleracao, tempo) {
//         return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//     }
// }

// const honda = {
//     marca: 'Honda',
// }

// const acelararHonda = carro.acelerar.bind(honda);

// // console.log(acelerarHonda(300, 20));

// console.log(carro)

