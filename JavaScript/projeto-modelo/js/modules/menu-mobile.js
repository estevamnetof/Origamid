export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['touchstart', 'click'];

    if(menuButton) {
        function openMenu(event) {
        menuButton.classList.toggle('active');
        menuList.classList.toggle('active')
        // outsideClick(menuList, eventos, () => {
        //     menuList.classList.remove('active');
        //     menuButton.classList.remove('active');
        // });
        }
        eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
    }
}