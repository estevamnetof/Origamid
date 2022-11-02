// const gridSection = document.querySelectorAll('.grid-section');

// gridSection.forEach(function(gridItem, index, array) {
//     gridItem.classList.add('azul');
//     console.log(index);
//     console.log(array)
// })


// const img = document.querySelectorAll('img');
// console.log(img)


// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')

// const linksInterno = document.querySelectorAll('[href^="#"]');

// console.log(linksInterno)


// const primeiroh2 = document.querySelector('.animais-descricao h2');

// console.log(primeiroh2);

// const ultimop = document.querySelectorAll('p')
// console.log(ultimop[ultimop.length - 1])


// const imgs = document.querySelectorAll('img');


// imgs.forEach(function(valorAtual, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// });




// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item) {
//     console.log(item);
// });

// const imgs = document.querySelectorAll('img');


// imgs.forEach(item => 
//     console.log(item)
// );

// imgs.forEach(item => console.log(item));


// const totalP = document.querySelectorAll('p');
// const arrayTotalP = Array.from(totalP);

// arrayTotalP.forEach(item => console.log(item));


// const menu = document.querySelector('.menu');
// console.log(menu.classList)

// const animais = document.querySelector('.animais');

// console.log(animais.attributes[0])


// const img = document.querySelector('img');
// console.log(img.getAttribute('src'));


// const animais = document.querySelector('.animais');

// console.log(animais.className = 'azul');


const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

const img = document.querySelector('img');
console.log(img.hasAttribute('alt'));

const hrefMenu = document.querySelector('[href^="#"]');
hrefMenu.setAttribute('[href^="#"]', 'https://www.google.com.br')
console.log(hrefMenu);

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/')