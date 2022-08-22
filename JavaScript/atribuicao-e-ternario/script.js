// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var valor = 500;
scroll += valor;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso a cliente possua carro e casa
// e false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito' : 'Negar crédito';
console.log(darCredito);