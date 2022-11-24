// const cep = fetch('./style.css')

// cep.then(r => r.text())
// .then(body => {
//   console.log(body)
//   const conteudo = document.querySelector('.conteudo');
//   const style = document.createElement('style');
//   style.innerHTML = body;
//   console.log(style);
//   conteudo.appendChild(style);
// });

// const imagem = fetch('./imagem.png');

// imagem.then(r => r.blob())
// .then(body => {
//   const blobUrl = URL.createObjectURL(body);
//   const imagemDom = document.querySelector('img');
//   imagemDom.src = blobUrl;
// });

// const imagem = fetch('https://viacep.com.br/ws/01001000/json/');

// imagem.then(r => {
//   const r2 = r.clone();
//   r.text().then((text) => {
//     console.log(text)
//   })
//   r2.json().then((json) => {
//     console.log(json)
//   })
//   console.log(r);
// })
// .then(body => {
//   console.log(body);
// });

const imagem = fetch('https://viacep.com.br/ws/01001000/json');

imagem.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe');
  }
});