// // function toNumber(value: number | string) {
// //     if (typeof value === 'number') {
// //         return value;
// //     } else if (typeof value === 'string') {
// //         return Number(value);
// //     } else {
// //         throw 'Value deve ser um número ou uma string';
// //     }
// // }

// interface Produto {
//     nome: string;
//     preco: number;
//     teclado: boolean;
// }

// function preencherDados(dados: Produto) {
//     document.body.innerHTML += `
//         <div>
//             <h2>${dados.nome}</h2>
//             <p>${dados.preco}</p>
//             <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
//         </div>
//     `;
// }

// preencherDados({
//     nome: 'Computador',
//     preco: 2000,
//     teclado: false
// });

// preencherDados({
//     nome: 'Notebook',
//     preco: 1500,
//     teclado: true
// });

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
    console.log(data);
  }
  
  fetchProduct();

  interface Produto {
    nome: string;
    preco: number;
    descricao: string;
  }
  
  function showProduct(data: Produto) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
      </div>
    `;
  }
  