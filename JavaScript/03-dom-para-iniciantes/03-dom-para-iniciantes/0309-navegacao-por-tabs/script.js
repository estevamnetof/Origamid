const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function navegacao(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  })
  tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      navegacao(index);
    });
  });
}

// const todosElementos = document.querySelectorAll('body *');

// function remover(event) {
//   event.currentTarget.remove('')
// }

// todosElementos.forEach((elementos) => {
//   elementos.addEventListener('click', remover);
// })

// console.log(todosElementos)