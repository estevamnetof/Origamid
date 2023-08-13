// type numberOrString = string | number;

// let total: numberOrString = 20;
// total = '30';

// interface Produto { 
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }

// function preencherDados(dados: Produto) {
//     document.body.innerHTML += `
//         <div>
//             <h2>${dados.nome}</h2>
//             <p>R$ ${dados.preco}</p>
//             <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
//         </div>
//     `
// }

// const computador: Produto = {
//     nome: 'Computador',
//     preco: 2000,
//     teclado: true,
// }

// preencherDados(computador);

// preencherDados({
//     nome: 'Notebook',
//     preco: 1000,
//     teclado: false,
// });

// type Categorias = 'design' | 'codigo' | 'descod';

// function pintarCategoria(categoria: Categorias) {
//     if (categoria === 'design') {
//         console.log('Pintar vermelho');
//     }
// }

// pintarCategoria('codigo');


interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}

interface Product {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
  
fetchProduct();

function showProduct(data: Product) {
    document.body.innerHTML = `
        <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <div>
            <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
        <div>
            <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
    `;
}
  