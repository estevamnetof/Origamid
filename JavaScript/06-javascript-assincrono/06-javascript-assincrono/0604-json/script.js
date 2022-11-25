// fetch('./dados.json')
// .then(r => r.json())
// .then(json => {
//   console.log(json);
//   json.forEach(materia => {
//     console.log(materia.aula);
//   })
// });


fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
});


const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: '2.1 Javascript',
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config))