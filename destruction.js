// destruction - é uma expressão que possibilita a extração de dados dinamicamente de Arrays e/ou Objetos em variaveis.
const pessoa = {
    nome : 'Elvis',
    sobrenome : 'Soares',
    idade : 28,
}
// forma convencional de atribuição e impressão
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)
console.log(pessoa)
let sobrenomeDoElvis = pessoa.sobrenome
console.log(sobrenomeDoElvis)
// forma desconstruida
let {nome, idade, sobrenome} = pessoa
console.log(sobrenome)
console.log(nome)
console.log(idade)
let {nome:nomeDoElvis} = pessoa
console.log(nomeDoElvis)
// os dados do dicionario podem ser modificados
nomeDoElvis = 'TioElvis'
console.log(nomeDoElvis)
// forma convencional de utilizar um Array
let nomes = ['Alice', 'Francisco', 'Felipe', 'Mikael']
console.log(nomes[1])
let nomeFrancisco = nomes[1]
console.log(nomeFrancisco)
// Desconstrução de Arrays
let [nome1, nome2] = nomes // com Arrays não podemos escolher o indice, iniciando sempre no 0
console.log(nome1)
console.log(nome2)
let {0:nomeAlice, 2:nomeFelipe} = nomes // com objetos podemos escolher os indices do Array
console.log(nomeAlice)
console.log(nomeFelipe)