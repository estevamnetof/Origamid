function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou'
    }
    this.andar = function() {
        return 'Andou pelo objeto'
    }
}

var obj = {
    nome: 'Andre',
    idade: 33,
}

obj.teste = 'Isso';

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

console.log(Pessoa.prototype);

