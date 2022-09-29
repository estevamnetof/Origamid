// const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)

// function eventoClique(event) {
//   console.log(event.innerText = 'clicou');
// }

// img.addEventListener('click', eventoClique);


// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   const currentTarget = event.currentTarget;
//   const target = event.target;
//   const type = event.type;
//   const path = event.path;
//   // console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);



// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);



// const img = document.querySelector('img');

// function callback(event) {
//   console.log(this);
//   console.log(this.getAttribute('src'));
// }

// img.addEventListener('click', callback);


const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
})



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();
  linkInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo')
}


linkInternos.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *')

// function handleElemento(event) {
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClick(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('click', handleClick);