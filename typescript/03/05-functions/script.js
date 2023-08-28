"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
function pintarTela(cor) {
    document.body.style.background = cor;
}
console.log(pintarTela('black'));
const btn = document.querySelector('button');
btn?.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('Teste'));
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(item => item.trim().toLocaleLowerCase());
    }
}
console.log(normalizar(' Produto ').toLocaleUpperCase());
console.log(normalizar([' Banana ', 'UVA   ']).filter);
function $(seletor) {
    return document.querySelector(seletor);
}
$('a')?.click();
$('video')?.volume;
$('.item');
