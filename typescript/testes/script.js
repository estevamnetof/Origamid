"use strict";
// Array
// async function fetchCursos() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json');
//     const json = await response.json();
//     handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//     if (data instanceof Array) {
//         console.log('É instância de array');
//     }
//     if (Array.isArray(data)) {
//         console.log('É array');
//     }
// }
// Type Predicate
function isString(value) {
    return typeof value === 'string';
}
function handleData(data) {
    if (isString(data)) {
        data.toUpperCase();
    }
}
// console.log(handleData('Origamid'));
// Objetos
// async function fetchProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleProduto(json);
// }
// fetchProduto();
// interface Produto {
//     nome: string;
//     preco: number;
//     descricao: string;
// }
// function isProduto(value: unknown): value is Produto {
//     if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function handleProduto(data: unknown) {
//     if (isProduto(data)) {
//         document.body.innerHTML += `
//             <h2>${data.nome}</h2>
//             <p>R$ ${data.preco}</p>
//             <p>${data.descricao}</p>
//         `
//     };
// }
// Exercício
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    console.log(json);
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'aulas' in value && 'gratuito' in value && 'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (data instanceof Array) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
                <div>
                    <h2>${item.nome}</h2>
                    <p>Aulas: ${item.aulas}</p>
                    <p>Gratuito: ${item.gratuito ? 'Sim' : 'Não'}</p>
                    <p>${item.tags.join(', ')}</p>
                </div>
            `;
        });
    }
}
