const { body }: { body: HTMLElement } = document;

function handleData({nome, preco}: {nome: string; preco: number}) {
    nome.includes('book');
    preco?.toFixed();
}

handleData({
    nome: 'Notebook',
    preco: 2000
});


function handleClick1({
    currentTarget,
    pageX,
}: {
    currentTarget: EventTarget | null;
    pageX: number;
}) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}<h1>`
    }
    console.log(pageX);
}


document.documentElement.addEventListener('click', handleClick1);

function handleClick2({ currentTarget }: { currentTarget: EventTarget | null }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: 1<h1>`
    }
}


document.documentElement.addEventListener('click', handleClick2);
document.documentElement.addEventListener('touchstart', handleClick2);


function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
    if(tipo === 'menor') {
        return Math.min(...numeros);
    }
    if(tipo === 'maior') {
        return Math.max(...numeros);
    }
}

console.log(comparar('menor', 3, 4, 5, 6, 7, 20, 10, 30, 1));
console.log(comparar('maior', 3, 4, 5, 6, 7, 20, 10, 30, 1));