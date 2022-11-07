// var numeros = [1, 2, 3, 4, 5]; //vetor original

// var quadrados = numeros.map((item) => {
//     return Math.pow(item, 2); //retorna o item original elevado ao quadrado
// });

// document.write(quadrados);


// var vencedores = [
//     {
//         nome: 'Equipe Super',
//         país: 'Brasil'
//     },
//     {
//         nome: 'Time Maximo',
//         país: 'EUA'
//     },
//     {
//         nome: 'Mega Grupo',
//         país: 'Canadá'
//     }
// ];

// var podioPorPais = vencedores.map((item, indice) => {
//     return item.país;
// });

// document.write(podioPorPais);

var vencedores = [
    {
        nome: 'Equipe Super',
        país: 'Brasil'
    },
    {
        nome: 'Time Maximo',
        país: 'EUA'
    },
    {
        nome: 'Mega Grupo',
        país: 'Canadá'
    }
];

var podioPorPais = vencedores.map((item, indice) => {
    return `<tr>
                <td>${indice + 1}</td>
                <td>${item.nome}</td>
                <td>${item.país}</td>
            </tr>`;
});

document.querySelector('#tbPodio tbody').innerHTML = podioPorPais.join("");

// ======================================================

var produtos = [
    {
        nome: "Smartphone 5' Android",
        preco: 1200
    },
    {
        nome: 'Notebook 4GB Windows 10',
        preco: 2100
    },
    {
        nome: "SmartTV 50' LED" ,
        preco: 8700
    }
];

var produtosComReajuste = produtos.map((item) => {
    return {
        nome: item.nome,
        preco: item.preco * 1.15
    }
});

produtosComReajuste.forEach(item => {
    console.log(`${item.nome.padEnd(30)} - ${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`);
});

var quadrados = [25, 16, 9, 4, 1];

var raizes = quadrados.map(numero => Math.sqrt(numero));

console.log(raizes);


var copas = [1958, 1962, 1970, 1994, 2002];

var titulos = copas.map((ano, indice) => `${indice + 1} : ${ano}`);

document.write(titulos.join('<br>'))

// ======================================================

function Person(first, last, age, gender) {
    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
}
  
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music']);


const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    starringRole: 'Tom Hanks'
}

function getSummary() {
    return `${this.title} foi dirigido por ${this.director}e tem ${this.starringRole} no papel principal`
}

console.log(getSummary.call(movie));

// ======================================================
// São todo protótipos do objeto Function onde tem como objetivo executar uma função passando por ela um diferente contexto e argumentos.

// call: contexto, param1, param2, param3, ...
// apply: contexto, array de parametros

pessoa = {
    idade: 10,
    bar: function(nome) {
        return `Olá ${nome}, você tem ${this.idade} anos`
    }
}

pessoa2 = {
    idade: 20
}

console.log(pessoa.bar('joao'));

// Pessoa 2 não tem método bar, mas podemos usar da pessoa emprestado
pessoa.bar.call(pessoa2, 'joao');

// ou com apply
pessoa.bar.apply(pessoa2, ['joao']);

// Exemplo:
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano)
}

console.log(descricaoCarro.call(carro));

// Exemplo 2:
function fazerAlgo(callback, arg1, arg2) {
    var args = Array.prototype.splice.call(arguments, 1);
    return callback.apply(this, args);
}

fazerAlgo((arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
}, 'foo', 'bar');