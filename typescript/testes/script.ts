function retorno<Tipo>(a: Tipo): Tipo {
    return a;
}

retorno('A Game').charAt(0);

function extractText<T extends HTMLElement>(el: T): string  {
    return el.innerText;
}

const link = document.querySelector('a');

if (link) {
    console.log(extractText(link))
}