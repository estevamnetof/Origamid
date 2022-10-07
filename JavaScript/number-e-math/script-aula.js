console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.434343));

console.log(parseFloat('32434.343'));

const preco = 10.32323;
console.log(preco.toFixed() + 3232);

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);
console.log(Math.PI);

console.log(Math.abs(3 - 7));
console.log(Math.ceil(4.3));
console.log(Number.parseInt(Math.random() * 100));

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio);