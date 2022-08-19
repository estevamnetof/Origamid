var pessoa = {
    nome: 'Estevam',
    sobrenome: 'Neto',
    idade: 22,

}

console.log(pessoa.idade, sobrenome, idade)

var quadrado = {
    lados: 4,
    area(lado) {
        return  lado * lado
    },
    perimetro(lado) {
        return this.lados * lado 
    },
    cinco() {
        return 5
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))