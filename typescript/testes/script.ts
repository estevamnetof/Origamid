function somar(a: number, b: number, c?:number): number {
    return a + b + (c ? c : 0);
}

console.log(somar(3, 8));
console.log(somar(3, 2, 82));

const subtrair = (a: number, b: number): number => a - b;

console.log(subtrair(23, 2));

type Callback = (event: MouseEvent) => void;

// Void
function pintarTela(cor: string) {
    document.body.style.background = cor;
}

pintarTela('black');

// Never
// function abortar(mensagem: string): never {
//     throw new Error(mensagem);
// }

// abortar('Um erro ocorreu');
// console.log('Tente novamente');

// Métodos
interface Quadrado {
    lado: number;
    perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {}

// Overload
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    } else {
        return valor.map((item) => item.trim().toLocaleLowerCase());
    }
}

console.log(normalizar('PROdutO   '));
console.log(normalizar(['BaNana ', ' UvA']));

// exemplo 2
function $(seletor: 'video'): HTMLVideoElement | null;
function $(seletor: 'div'): HTMLDivElement | null;
function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
    return document.querySelector(seletor);
}

$('a')?.href;
$('video')?.volume;
$('.teste')?.innerHTML;