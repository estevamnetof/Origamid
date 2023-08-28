// function somar(a:number, b:number, c?: number):number {
//     return a + b + (c ? c : 0);
// }

// somar(3, 4);

// const subtrair = (a:number, b: number) => a - b;

// subtrair(4, 3);

// type Callback = (event: MouseEvent) => void;

// function pintarTela(cor: string): void {
//     document.body.style.background = cor;
// }

// console.log(pintarTela('black'));

// const btn = document.querySelector('button');

// btn?.click();

// function isString(value: any) {
//     if (typeof value === 'string') {
//         return true;
//     }
// }

// console.log(isString('Teste'));

// function abortar(mensagem: string): never {
//     throw new Error(mensagem);
// }

// // abortar('Um erro ocorreu');
// // console.log('Tente novamente');

// interface Quadrado {
//     lado: number;
//     perimetro(lado: number): number
// }

// function calcular(forma:Quadrado) {
//     forma.perimetro(3);
// }


// function normalizar(valor: string[]): string[];
// function normalizar(valor: string): string;
// function normalizar(valor: string | string[]): string | string[] {
//     if (typeof valor === "string") {
//         return valor.trim().toLowerCase();
//     } else {
//         return valor.map(item => item.trim().toLocaleLowerCase());
//     }
// }

// console.log(normalizar(' Produto ').toLocaleUpperCase());
// console.log(normalizar([' Banana ', 'UVA   ']).filter);


// function $(seletor: 'a'): HTMLAnchorElement | null;
// function $(seletor: 'video'): HTMLVideoElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//     return document.querySelector(seletor);
// }

// $('a')?.click();
// $('video')?.volume;
// $('.item');


// ======================================================

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: number | string): number | string {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    } else {
        return Math.ceil(Number(valor)).toString();
    }
}

console.log(arredondar(200.32));
console.log(arredondar('203.32'));