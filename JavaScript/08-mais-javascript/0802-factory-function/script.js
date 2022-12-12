// function $$(selectedElements) {
//   const elements = document.querySelectorAll(selectedElements);

//   function hide() {
//     elements.forEach(element => {
//       element.style.display = 'none';
//     });
//     return this;
//   }

//   function show() {
//     elements.forEach(element => {
//       element.style.display = 'initial';
//     });
//     return this;
//   }

//   function on(onEvent, callback) {
//     elements.forEach(element => {
//       element.addEventListener(onEvent, callback);
//     });
//     return this;
//   }

//   function addClass(className) {
//     elements.forEach(element => {
//       element.classList.add(className);
//     });
//     return this;
//   }

//   function removeClass(className) {
//     elements.forEach(element => {
//       element.classList.remove(className);
//     });
//     return this;
//   }

//   return {
//     elements,
//     hide,
//     show,
//     on,
//     addClass,
//     removeClass,
//   }
// }

// const btns = $$('button');

// console.log(btns.hide().show());

// function handleClick(event) {
//   console.log(event.target);
//   btns.addClass('active');
// }

// btns.on('click', handleClick);

// =================================

// function createButton(text) {
//   function element() {
//     const numeroSecreto = 'j3kl32j9823jo';

//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return {
//     text,
//     element, 
//   }
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if(!(this instanceof Pessoa))
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer);