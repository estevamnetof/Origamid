// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

// Dom.seletor = 'ul';
// Dom.ativar();

function Carro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;

    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 7000);
const chevrolet = new Carro('Chevrolet', 8000);