// exemplo 1
function retorno<Tipo>(a: Tipo): Tipo {
    return a;
}

console.log(retorno('A Game').charAt(0));
console.log(retorno(200).toFixed());

// exemplo 2
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
    return lista.slice(0, 5);
}

const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];

const five1 = firstFive(numeros);
const five2 = firstFive(frutas);

console.log(five1);
console.log(five2);

// exemplo 3
function notNull<T>(arg: T) {
    if (arg !== null) return arg;
    else return null;
}

console.log(notNull(200)?.toFixed());

// Extends
// exemplo 1   
function extractText<T extends HTMLElement>(el: T): string {
    return el.innerText;
}

// const link = document.querySelector('a');

// if (link) {
//     console.log(extractText(link));
// }

// exemplo 2
function $<T extends Element>(selector: string): T | null {
    return document.querySelector(selector);
}

// const link = $<HTMLAnchorElement>('a')?.href;
// console.log(link);

// Métodos
const link = document.querySelector<HTMLAnchorElement>('.link');
link?.href;

async function getData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

interface Notebook {
    nome: string;
    preco: number;
}

async function handleData() {
    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}

handleData();