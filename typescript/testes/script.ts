class Produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}

const livro = new Produto('A Guerra dos Tronos', 200);