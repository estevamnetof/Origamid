const numeros = [10, 30, 40, 5, 3, 30];

function maiorQue10(data: number[]) {
    return data.filter(n => n > 10);
}

console.log(maiorQue10(numeros));

const valores = [10, 'Taxas', 40, 'Produto', 3, 30];

function filtrarValores(data: (number | string)[]) {
    return data.filter(item => typeof item === 'string');
}

console.log(filtrarValores(valores));