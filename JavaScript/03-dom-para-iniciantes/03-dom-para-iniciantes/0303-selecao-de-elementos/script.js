// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('a[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2animaisDescricao);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);
