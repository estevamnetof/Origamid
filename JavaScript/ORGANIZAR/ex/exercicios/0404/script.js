// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 39',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129,'
    }, 
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = item.valor.replace('R$ ', '');
    if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo;
    } else if (item.descricao.sicle(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo;
    }
});
console.log(taxaTotal);
console.log(recebimentoTotal);