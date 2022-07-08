function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(10))


///////////////////

function pi() {
    return 3.14
}

var total = 5 * pi() // 15.7
console.log(total)

//////////////////


function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(80, 1.8))


/////////////////

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu'
    } else if (cor === 'verde') {
        return 'Eu gosto de mato'
    } else {
        return 'Eu não gosto de cores'
    }
}

/////////////////


//addEventListener('click', function() {console.log('Oi')}) 

                    // OU

function mostraConsole() {
    console.log('Oi')
}

addEventListener('click', mostraConsole)

function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc2(80, 1.80) // retorna imc
console.log(imc2(80, 1.80)) // retorna o imc e undefined



function terceiraIdade(idade) {
    if(idade >= 60) {
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(60))