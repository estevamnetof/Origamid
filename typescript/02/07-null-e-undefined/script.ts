const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
    button.click();
}

if (button) {
    button.click();
}

button?.click();

let total;

function teste() {

}

// console.log(typeof total);

// if(total) {
//     console.log('Total foi definido');
// } else {
//     console.log('Total foi definido');
// }

interface Product {
    nome?: string;
}

const jogo: Product = {
    nome: 'Ragnarok',
}

const livro: Product = {}

if (jogo.nome) {
    jogo.nome.toLocaleLowerCase;
}

livro.nome?.toLocaleLowerCase;