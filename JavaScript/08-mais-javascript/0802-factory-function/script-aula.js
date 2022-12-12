// "use strict";

// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto';
// btnComprar.element = 'Novo texto';

// console.log(btnComprar, btnVender)

function Pessoa(nome) {
  if(!(this instanceof Pessoa))
    return new Pessoa(nome)
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer);

// =================================================

// Factory Function
function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element,
    text,
  }
}

const comprarBtn = createButton('Comprar');


// Métodos/Variáveis privadas
// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome, 
//     sobrenome,
//     andar,
//     nadar
//   }
// }

// const designer = criarPessoa('André', 'Rafael');


// Ice Factory
// 'use strict';

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;
//   function andar() {
//     return `${nomeCompleto} andou`
//   }
//   return Object.freeze({
//     nome,
//     sobrenome,
//     andar,
//   });
// }

// const designer = criarPessoa('André', 'Rafael');


// Constructor Function/Factory Function
// function Pessoa(nome) {
//   if(!(this instanceof Pessoa))
//     return new Pessoa(nome);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designer = Pessoa('André');