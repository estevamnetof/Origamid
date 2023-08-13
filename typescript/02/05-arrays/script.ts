const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];

function maiorQue10(data: number[]) {
    return data.filter(n => n > 10);
}

function filtrarValores(data: (string | number)[]) {
    return data.filter(item => typeof item === 'number');
}

console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));

const dados = [
    ['Senhor dos Aneis', 80],
    ['A guerra dos tronos', 120],
]