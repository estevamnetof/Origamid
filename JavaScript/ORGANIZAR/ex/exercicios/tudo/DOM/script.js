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


// const itensMenu = document.querySelectorAll('.menu a');

// itensMenu.forEach((item) => {
//     item.classList.add('ativo');
// })

// const img = document.querySelector('img');
// console.log(img.hasAttribute('alt'));

// const hrefMenu = document.querySelector('[href^="#"]');
// hrefMenu.setAttribute('[href^="#"]', 'https://www.google.com.br')
// console.log(hrefMenu);

// const link = document.querySelector('a[href^="http"]')
// link.setAttribute('href', 'https://www.google.com/')


// const section = document.querySelector('.animais');

// section.clientHeight
// section.offsetTop;

// const rect = section.getBoundingClientRect();


// if(window.innerWidth < 600) {
//     console.log('Tela menor que 600px')
// }

// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//     console.log('Tela menor que 600px')
// } else {
//     console.log('Tela maior que 600px')
// }


// const img = document.querySelectorAll('img');
// // console.log(img.offsetTop);

// let soma = 0
// img.forEach((img) => {
//     soma += img.offsetWidth
// });
// console.log(soma)

// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//     const linkWidth = link.offsetWidth;
//     const linkHeight = link.offsetHeight;
//     if(linkWidth >= 48 && linkHeight >= 48) {
//         console.log(link, 'Possui boa acessibilidade')
//     } else {
//         console.log(link, 'Não possui boa acessibilidade')
//     }
// });


// const smallBrowser = window.matchMedia('(max-width: 720px)');

// if(smallBrowser) {
//     const menu = document.querySelector('.menu')
//     menu.classList.add('menu-mobile');
// };

// console.log('A página tem ', window.innerWidth, 'px');


// const img = document.querySelector('img');

// // img.addEventListener('click', () => {
// //     console.log('Clicou')
// // });

// function callback(event) {
//     console.log(event);
// }

// img.addEventListener('click', callback);


const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const target = event.target;
    console.log(target);
}

animaisLista.addEventListener('click', executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

// const img = document.querySelector('img');

// function callback(event) {
//     console.log(this);
// }

// img.addEventListener('click', callback);


// function callback(event) {
//     if(event.key === 'a')
//         document.body.classList.toggle('azul')
//     else if (event.key === 'v')
//         document.body.classList.toggle('vermelho')
// }

// window.addEventListener('keydown', callback);


// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//     const src = event.currentTarget.getAttribute('src');
//     console.log(src);
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', imgSrc)
// })


const linksInternos = document.querySelectorAll('a[href^="#"]');

function linkClick(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', linkClick);
});


// const todosElementos = document.querySelectorAll('body *');

// function mostrar(event) {
//     event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', mostrar)
// });


function handleClick(event) {
    console.log(event.key)
    if (event.key === 't') {
        document.documentElement.classList.toggle('textoMaior');
    }
}

window.addEventListener('keydown', handleClick)
