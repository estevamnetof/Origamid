// const links = document.querySelectorAll('.link');
// console.log(links instanceof NodeList);

// links.forEach((link) => {
//   if (link instanceof HTMLAnchorElement) {
//     console.log(link.href);
//   } else {
//     console.log(typeof link);
//   }
// });

// // erro, filter é um método de Array e não de NodeList
// // const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);

// // Funciona, pois a NodeList foi transformada em uma Array
// const anchorLinks = Array.from(links).filter(
//   (link) => link instanceof HTMLAnchorElement,
// );

const links = document.querySelectorAll('.link');

function ativarElementoAnchor(elemento: HTMLElement) {
    elemento.style.color = 'red'
    elemento.style.border = '2px solid red'
}

links.forEach((link) => {
    console.dir(link);
    // console.dir(link.__proto__.__proto__);
    if (link instanceof HTMLElement) {
        ativarElementoAnchor(link);
    }
});