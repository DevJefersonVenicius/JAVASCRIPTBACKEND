// Testando if e else
const prompt = require('prompt-sync')()
let numero = Number(prompt('Digite um número: '))
let numero2 = Number(prompt('Digite um número: '))
console.log(numero + numero2)

if (numero > numero2) {
    console.log('O primeiro número é maior.')
} else if (numero < numero2) {
    console.log('O segundo número é maior.')
} else {
    console.log('Os números são iguais.')
}
