class Livro {
    autor: string;
    constructor(autor: string) {
        this.autor = autor;
    }
}

class Jogo {
    jogadores: number;
    constructor(jogadores: number) {
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string) {
    if (busca === 'O Hobbit') {
        return new Livro('J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}

const produto = buscarProduto('O Hobbit');
console.log(produto);

if (produto instanceof Livro) {
    produto.autor;
}