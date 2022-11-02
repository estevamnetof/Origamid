// const section = document.querySelector('.animais');
// const sectionHeight = section.getBoundingClientRect();
// // console.log(sectionHeight);

// console.log(window.innerHeight)

// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px');
// } else {
//   console.log('Tela maior que 600px');
// }



// Verique a distância da primeira imagem
// em relação ao topo da página
const animais = document.querySelector('.animais-lista');
const animaisTop = animais.offsetTop
console.log(animaisTop);

// Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');
let soma = 0;
imagens.forEach((imagem) => {
  soma += imagem.offsetWidth
});
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkHeight = link.offsetHeight;
  const linkWidth = link.offsetWidth;
  if(linkHeight >= 48 && linkWidth >= 48) {
    console.log('Possui acessibilidade')
  } else {
    console.log('Não possui acessibilidade')
  }
});

// Se o browser for menor que 720px, 
// adicione a classe menu-mobile ao menu
const small = window.matchMedia('(max-width: 720px)').matches;

if(small) {
  const menu = document.querySelector('.menu').classList.add('menu-mobile');
}