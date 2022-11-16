function initTab() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section')

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function navegacao(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                navegacao(index);
            });
        });
    }
}
initTab();

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

    function activeAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }
    
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    });
}
initAccordion()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll(' [data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        console.log(event)
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    })
}   
initScrollSuave()

































// // Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');

// const cloneMenu = menu.cloneNode(true);
// copy.appendChild(cloneMenu);

// // Selecione o primeiro DT da dl de Faq
// const faq = document.querySelector('.faq');
// const primeiroDt = faq.querySelector('dt');


// // Selecione o DD referente ao primeiro DT
// const proximoDD = primeiroDt.nextElementSibling;

// console.log(proximoDD);

// // Substitua o conteúdo html de .faq pelo de .animais
// const animais = document.querySelector('.animais');

// faq.innerHTML = animais.innerHTML;
