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

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop(); // ambos jeitos são iguais, sem diferença


// Array-like

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3,
}

const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const filtro = arrayLi.filter((item) => {
//     return item.classList.contains('ativo')
// });

const filtro = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativo')
});

console.log(filtro);

console.log(li);