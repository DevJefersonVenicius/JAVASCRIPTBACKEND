// Faça um codigo que identifique um Palíndromo. EX: radar; arara; ele; ama.
import promptSync from 'prompt-sync'
const prompt = promptSync()
const palavra = prompt('Digite uma palavra: ').toUpperCase()
const palavraReversa = palavra.split('').reverse().join('')
if (palavraReversa === palavra) {
console.log(`A palavra "${palavra}" é um palindromo.`)
} else {
    console.log(`A palavra "${palavra}" não é um palindromo.`)
}
