var possuiGraduacao = true
var possuiDoutorado = true
if(possuiGraduacao) {
    console.log('É verdadeiro')
} else if (possuiDoutorado) {
    console.log('Possui doutorado')
} else {
    console.log('Não possui nada')
}


var nome = 'André'
if(nome) {
    console.log(nome)
} else {
    console.log('Nome não existe')
}


var temPastel = false
if(!temPastel) { // quando tem a exclamação na frente ele vira uma negação
    console.log('não tem pastel')
} else {
    console.log('Tem pastel')
}


var x = '10'
console.log(x === 10)

var y = 11
console.log(y !== 10)


if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


var condicional = (5 - 10) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)
console.log(condicional2)


var corFavorita = 'Azul'
switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu')
        break
    case 'Amarelo':
        console.log('Olhe para o sol')
        break
    case 'Verde':
        console.log('Olhe para a floresta')
        break
    default:
        console.log('Fecha os olhos')
}