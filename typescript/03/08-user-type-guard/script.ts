// async function fetchCursos() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json');
//     const json = await response.json();
//     handleCursos(json);
// }

// fetchCursos();

// function handleCursos(data: unknown) {
//     if (data instanceof Array) {
//         console.log('É uma instância de Array');
//     }
//     if (Array.isArray(data)) {
//         console.log('É array');
//     }
// }

// function isString(value: unknown): value is string {
//     if (typeof value === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// }

// function handleData(data: unknown) {
//     if (isString(data)) {
//         data.toLocaleLowerCase();
//     }
// }

// async function fetchProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleProduto(json);
// }
// fetchProduto();

// interface Produto {
//     nome: string;
//     preco: number
// }

// function isProduto(value: unknown): value is Produto {
//     if (value && typeof value === 'object' && "nome" in value && "preco" in value) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function handleProduto(data: unknown) {
//     if (isProduto(data))
//     console.log(data.nome);
// }

// =================================================

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}

fetchCursos();

interface Cursos {
    nome: string;
    aulas: number;
    gratuito: boolean;
    horas: number;
    idAulas: number[];
    nivel: "iniciante" | "avancado";
    tags: string[];
}

function isCurso(value: unknown): value is Cursos {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
        return true;
    } else {
        return false;
    }
}

function handleCursos(data: unknown) {
    if (data instanceof Array) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
                <div>
                    <h2>Nome: ${item.nome}</h2>
                    <p>Horas: ${item.horas}</p>
                    <p>Tags: ${item.tags.join(', ')}</p>
                </div>
            `
        })
    }
}