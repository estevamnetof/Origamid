"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros));
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
    console.log(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
            <div>
                <h2 style="color: ${color};">${curso.nome}</h2>
                <p>${curso.horas} Horas</p>
                <p>${curso.nivel}</p>
            </div>
        `;
    });
}
