// usando if e else no JavaScript
const proompt = require('prompt-sync')()

let idade = Number(proompt('Informe sua idade: '))

if (idade <= 12 && idade > 0) {
    console.log('Você é uma criança!')
} else if (idade < 18 && idade >= 12){
    console.log('Você é um adolescente!')
} else if (idade >= 18 && idade < 60) {
    console.log('Você é um adulto!')
} else if (idade > 60 && idade <= 120) {
    console.log('Você é idoso!')
} else {
    console.log('Impossivel validar sua idade.')
}
