// Crie um codigo que receba um valor e faça a conversão de acordo com a solicitação do usuario
const prompt = require('prompt-sync')();
const valor = Number(prompt('Informe um valor numérico: '))
function converterValor () {
    if (isNaN(valor)) {
        console.log('Você digitou um valor inválido.')
        return
    } else {
        const deValor = prompt('Informe a unidade do número informado: (m para metros; km para quilômetros; cm para centímetros; mm para milímetros): ');
        const paraValor = prompt('Informe a unidade destino: ')
    if (deValor === paraValor) {
        console.log(`${valor}${deValor} para "${paraValor}" é igual a ${valor}${paraValor}`)
        }
    if (deValor === 'm' && paraValor ===  'cm') {
        console.log(`${valor}${deValor} para "${paraValor}" é igual a ${valor * 100}${paraValor}`)
    } else if (deValor === 'm' && paraValor === 'km') {
        console.log(`${valor}${deValor} para "${paraValor}" é igual a ${valor / 1000}${paraValor}`)
    } else if (deValor === 'm' && paraValor === 'mm') {
        console.log(`${valor}${deValor} para "${paraValor}" é igual a ${valor * 1000}${paraValor}`)
    }
}
}
console.log(converterValor())
