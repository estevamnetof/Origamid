"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
        <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>Garantia: ${data.garantia}</p>
        <p>Seguro de Acidentes: ${data.seguroAcidentes ? 'Sim' : 'Não'}</p>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
    `;
}
