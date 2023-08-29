"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(3, 8));
console.log(somar(3, 2, 82));
const subtrair = (a, b) => a - b;
console.log(subtrair(23, 2));
// Void
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
function calcular(forma) { }
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLocaleLowerCase());
    }
}
console.log(normalizar('PROdutO   '));
console.log(normalizar(['BaNana ', ' UvA']));
function $(seletor) {
    return document.querySelector(seletor);
}
$('a')?.href;
$('video')?.volume;
$('.teste')?.innerHTML;
