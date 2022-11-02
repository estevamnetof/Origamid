// const menu = document.querySelector('.menu');

// console.log(menu.classList);
// console.log(menu.classList.contains('azul'));


// const animais = document.querySelector('.animais');
// console.log(animais.attributes[0]);


// const img = document.querySelector('img');
// console.log(img.getAttribute('src'));


// const animais = document.querySelector('.animais');
// console.log(animais.className += ' vermelho')

// Adicione a classe ativo a todos os itens do menu
const menuLi = document.querySelectorAll('.menu a');
menuLi.forEach((item) => {
  item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuLi.forEach((item) => {
  item.classList.remove('ativo');
});
menuLi[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt 
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
const possuiAtributo = img.hasAttribute('alt');
console.log(img, possuiAtributo);
})

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/')
console.log(link);