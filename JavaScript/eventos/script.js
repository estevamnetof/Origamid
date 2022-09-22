// Quando o usuário clicar nos links internos do site, 
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linkInternos.forEach((link) => {
        link.classList.remove('ativo')
    });
    event.currentTarget.classList.add(ativo);
}

linkInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique moestre exatamente quais elementos estão sendo clicados

    // const todosElementos = document.querySelectorAll('body *');

    // function handleElemento(event) {
    //     console.log(event.currentTarget);
    // }

    // todosElementos.forEach((elemento) => {
    //     elemento.addEventListener('click', handleElemento);
    // });



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove()
// remove um elemento

    // const todosElementos = document.querySelectorAll('body *');

    // function handleElemento(event) {
    //     event.currentTarget.remove();
    // }

    // todosElementos.forEach((elemento) => {
    //     elemento.addEventListener('click', handleElemento);
    // });

// Se o usuário clicar na tecla(t), aumente todo texto do site

function handleClickT(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickT);