// const Dom = {
//     seletor: 'li',
//     element() { // elemento: function() {} // é a mesma coisa
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.element = function(classe) { 
        return document.querySelector(seletor);
    },
    this.ativar = function() {
        this.element().classList.add(classe);
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar');