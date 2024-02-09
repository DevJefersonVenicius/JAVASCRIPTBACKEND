// Faça um programa que calcule o fatorial de um número.
const prompt = require('prompt-sync')()
let numero = Number(prompt('Digite um número: '))
let resultado = 1
for (let i=1; i<=numero; i++) {
    resultado *= i
}
console.log(resultado)