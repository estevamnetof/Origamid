// Crie um método no objeto anterior, que mostre o seu nome completo
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Estevam', 
    sobrenome: 'Neto',
    idade: 22,
    cidade: 'Fortaleza'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem' || pessoa === 'Homem') {
            return 'Latir'
        } else {
            return 'Nada'
        }
    }
}