// fetch('./dados.json')
// .then(r => r.json())
// .then(json => {
//   console.log(json);
//   json.forEach(materia => {
//     console.log(materia.aula);
//   })
// });


// fetch('./dados.json')
// .then(r => r.text())
// .then(jsonText => {
//   const jsonFinal = JSON.parse(jsonText);
//   console.log(jsonFinal);
// });


// const configuracoes = {
//   player: "Google",
//   tempo: 25.5,
//   aula: '2.1 Javascript',
// }

// localStorage.config = JSON.stringify(configuracoes)

// console.log(JSON.parse(localStorage.config))


[
  {
    "id": 1,
    "aula": "Javascript",
    "tempo": "25min"
  },
  {
    "id": 2,
    "aula": "HTML",
    "tempo": "15min"
  },
  {
    "id": 3,
    "aula": "CSS",
    "tempo": "10min"
  }
]



const textoJSON = '{"id": 1, "titulo": "Javascript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

console.log(textoJSON);
console.log(textoOBJ);


const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
}

const enderecoJSON = JSON.stringify(enderecoOBJ);

console.log(enderecoOBJ);
console.log(enderecoJSON);


const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: "2-1 Javascript",
  vitalicio: true,
}

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(configuracoes);