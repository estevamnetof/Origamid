function typeGuard(value: any) {
    if (typeof value === 'string') {
        return value.toLocaleLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);

// in
const obj = {
    nome: 'Origamid',
}

if ('nome' in obj) {
    console.log('Sim');
}

// exemplo 2
interface Produto {
    nome: string;
    preco: number;
    descricao: string;
}

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}

function handleProduto(data: Produto) {
    if ('preco' in data) {
        document.body.innerHTML += `
            <p>Nome: ${data.nome}</p>
            <p>Preço: R$${data.preco}</p>
            <p>Descrição: ${data.descricao}</p>
        `
    }
}

fetchProduto();