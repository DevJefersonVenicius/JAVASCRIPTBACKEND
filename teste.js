// Testando com strings
const prompt = require('prompt-sync')()
let nome = 'Jeferson'
console.log(nome) // Imprimindo a variavel
console.log(nome.length) // Imprimindo o tamanho da variavel
console.log(nome + ' Venicius') // Concatenando as strings
console.log(`${nome + ' Venicius'}`) // Interpolando as strings
console.log(nome[4]) // Imprimindo um indice da string
console.log(nome.slice(5)) // Imprimindo partes da string
console.log(nome[0] + nome[6] + nome[5] + nome[1]) // Juntando strings por indices e formando novo nome
let sobrenome = 'Venicius'
console.log(nome + ' ' + sobrenome) // Concatenando duas variaveis
console.log(`${nome + ' ' + sobrenome} `) // Interpolando variaveis
