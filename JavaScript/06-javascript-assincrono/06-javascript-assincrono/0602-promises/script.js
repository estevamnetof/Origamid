//  const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if(condicao) {
//     setTimeout(() => {
//       resolve({nome: 'Estevam', idade: 22});
//     }, 1000);
//   } else {
//     reject(Error('Um erro ocorreu na promise'));
//   }
//  });

// const retorno = promesa
// .then(resolucao => {
//   resolucao.profissao = 'Designer';
//   return resolucao;
// })
// .then(resolucao => {
//   console.log(resolucao)
// })
// .catch(rejeitada => {
//   console.log(rejeitada);
// }).finally(() => {
//   console.log('Acabou');
// })

// console.log(retorno);

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Usuário logado')
//   }, 1000);
// });

// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Dados carregados')
//   }, 1500);
// });

// const carregouTudo = Promise.race([login, dados]);

// carregouTudo.then((resolucao) => {
//   console.log(resolucao);
// });
 
// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// console.log(promessa);

// promessa.then(resolucao => console.log(resolucao));

// const promessa = new Promise((resolve, reject) => {
//     resolve('Etapa 1');
// });

// promessa.then(resolucao => {
//   console.log(resolucao)
//   return 'Etapa 2'
// }).then(resolucao => {
//   console.log(resolucao);
//   return 'Etapa 3';
// }).then(r => r + 4)
// .then( r => {
//   console.log(r);
// });

// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     resolve('Estou pronto!');
//   } else {
//     reject(Error('Um erro ocorreu'));
//   }
// });

// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// }).finally(() => {
//   console.log('Acabou');
// });

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
 });
 const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
 });

//  const tudoCarregado = Promise.all([login, dados]);

//  tudoCarregado.then(respostas => {
//   console.log(respostas); // Array com ambas respostas
//  })

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta);
});