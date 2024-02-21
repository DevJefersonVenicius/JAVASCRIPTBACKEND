const prompt = require('prompt-sync')()
const salario = Number(prompt('Digite seu salario: '))
const iR = null
function imposto(salario, iR) {
    salario = salario * iR / 100
    switch (true) {
        case salario <= 1903.98:
            console.log('Seu salario é isento de IR.')
            break
        case salario >= 1903.99 && salario <= 2826.65:
            console.log(`A taxa de IR do seu salario é de ${imposto()}`)
            break
    }
    
}
imposto()