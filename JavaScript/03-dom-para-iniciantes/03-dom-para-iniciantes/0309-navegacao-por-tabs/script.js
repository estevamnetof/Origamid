const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
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