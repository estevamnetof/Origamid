"use strict";
function retorno(a) {
    return a;
}
retorno('A Game').charAt(0);
function extractText(el) {
    return el.innerText;
}
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
}
