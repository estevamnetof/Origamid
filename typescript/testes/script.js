"use strict";
function ativarMenu(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        elemento.style.background = 'red';
    }
}
const button = document.querySelector('button');
button?.addEventListener('click', ativarMenu);
window.addEventListener('keydown', ativarMenu);
