"use strict";
// exemplo 1
function retorno(a) {
    return a;
}
console.log(retorno('A Game').charAt(0));
console.log(retorno(200).toFixed());
// exemplo 2
function firstFive(lista) {
    return lista.slice(0, 5);
}
const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
const five1 = firstFive(numeros);
const five2 = firstFive(frutas);
console.log(five1);
console.log(five2);
// exemplo 3
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull(200)?.toFixed());
// Extends
// exemplo 1   
function extractText(el) {
    return el.innerText;
}
// const link = document.querySelector('a');
// if (link) {
//     console.log(extractText(link));
// }
// exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
// const link = $<HTMLAnchorElement>('a')?.href;
// console.log(link);
// Métodos
const link = document.querySelector('.link');
link?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
handleData();
