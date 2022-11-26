// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(response => response.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

// const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com';

// fetch(url)
// .then(response => response.text())
// .then(text => console.log(text));

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => {
//     console.log(pokemon);
// });

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const options = {
//     method: 'POST',
//     body: '{"title": "Javascript"}',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/posts/2';
// const options = {
//     method: 'HEAD',
// }

// fetch(url, options)
// .then(response => {
//     console.log(response.headers.forEach(console.log))
// })
// .then(json => console.log(json));

const url = 'https://www.google.com';

fetch(url)
.then(response => response.text())
.then(text => console.log(text));