// const numeros = [10, 20, 30, 40, 50, 3];
// const valores = [10, 'Taxas', 30, 'Produto', 50, 3];

// function maiorQue10(data: number[]) {
//     return data.filter(n => n > 10);
// }

// function filtrarValores(data: (string | number)[]) {
//     return data.filter(item => typeof item === 'number');
// }

// console.log(filtrarValores(valores));
// console.log(maiorQue10(numeros));

// const dados = [
//     ['Senhor dos Aneis', 80],
//     ['A guerra dos tronos', 120],
// ]

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  console.log(data)
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
    nome: string;
    aulas: number;
    gratuito: boolean;
    horas: number;
    idAulas: number[];
    tags: string[];
    nivel: 'iniciante' | 'avancado';
}

function mostrarCursos(cursos: Curso[]) {
    cursos.forEach(curso => {
        let color;

        if (curso.nivel === 'iniciante') {
            color = 'blue';
        } else if (curso.nivel === 'avancado') {
            color = 'red';
        }

        document.body.innerHTML += `
            <div>
                <h2 style='color: ${color};'>${curso.nome}</h2>
                <p>Horas: ${curso.horas}</p>
                <p>Aulas: ${curso.aulas}</p>
                <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
                <p>Tags: ${curso.tags.join(', ')}</p>
                <p>Aulas: ${curso.idAulas.join(' | ')}</p>
            </div>
        `
    })
}

