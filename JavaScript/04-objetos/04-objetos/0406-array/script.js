const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
console.log(primeiroValor); 

const ultimoValor = comidas.pop();
console.log(ultimoValor)

const adicionaUltimo = comidas.push('Arroz');
const adicionaPrimeiro = comidas.unshift('Peixe', 'Batata');

console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const ordemAlfabetica = estudantes.sort();
console.log(ordemAlfabetica);

const ordemInversa = estudantes.reverse();
console.log(ordemInversa);

const temJoana = estudantes.includes('Joana');
console.log(temJoana);

const temJuliana = estudantes.includes('Juliana');
console.log(temJuliana);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');

console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);