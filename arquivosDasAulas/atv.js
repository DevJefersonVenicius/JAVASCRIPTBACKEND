// Faça um algoritmo que calcule o fatorial de um número.
import promptSync from 'prompt-sync'
const prompt = promptSync()

let numero = Number(prompt('Informe um número: '))
let resultado = 1
for (let i=1; i<=numero; i++) {
    resultado *= i
}
console.log(`O fatorial de ${numero} é ${ resultado }`)