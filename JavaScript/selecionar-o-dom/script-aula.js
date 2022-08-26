const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document
.getElementsByClassName('grid-section');

console.log(gridSection[0]);



const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linkInternos = document.querySelector("[href^='#']");
console.log(linkInternos.href);


const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[1])



const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);