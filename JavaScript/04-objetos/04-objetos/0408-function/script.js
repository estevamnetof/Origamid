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

const filtro = Array.prototype.filter.call(li, (item) => {
  console.log(item)
});

console.log(li)