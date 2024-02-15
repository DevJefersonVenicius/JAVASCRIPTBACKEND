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
