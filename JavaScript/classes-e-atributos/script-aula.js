const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho';

console.log(menu.className);

//console.log(menu.classList[0]);

const animais = document.querySelector('.animais');
console.log(animais.attributes.class);



const img = document.querySelector('img');


console.log(img.getAttribute('src'));

console.log(img.setAttribute('alt', 'é uma raposa'));


const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt)

const carro = {
    portas: 4, 
    andar: function(km) {
        console.log(`Andou ${km}`);
    }
}