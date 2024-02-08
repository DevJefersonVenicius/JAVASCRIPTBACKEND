function soma(x, y) {
    return x + y
}

console.log(soma(5, 7))
console.log(soma(5, 10))
console.log(soma(4, 8))
console.log(soma(5, 9))

let a = 5, b = 6
let soma2 = a + b
console.log(soma2)
a = 3, b = 10
soma2 = a + b
console.log(soma2)
a = 10, b = 5
soma2 = a + b
console.log(soma2)

function deMaior(idade) {
    if (idade === 18) {
        console.log('Você tem 18 anos!')
    } else if (idade > 18 && idade <= 120) {
        console.log('Você tem mais de 18 anos!')
    } else if (idade < 18 && idade > 0) {
        console.log('Você tem menos de 18 anos!')
    } else if (idade <= 0) {
        console.log('Você digitou um número invalido para o calculo de idade.')
    } else {
        console.log('Impossivel analisar sua idade.')
    }
}

const prompt = require('prompt-sync')()
let idade = Number(prompt('Digite sua idade (limite: 120): '))
deMaior(idade)
console.log(typeof(deMaior))

// Função Anonima - Função dentro de uma variavel
const minhaFuncao = function () {return 2 + 2}

// Função Anonima - Função dentro de um array
const meuArray = [function(a, b) {return a - b}, 'Jeferson', 2024, 'a', true]
console.log(meuArray[0](3, 2))
console.log(meuArray)

// Função Anonima - Função dentro de um objeto
const meuObjeto = {}
meuObjeto.saudacao = function() {return 'Olá pessoal!'}
console.log(meuObjeto.saudacao())
console.log(meuObjeto)

// Função Anonima - Função como argumento de uma função
function qualquerCoisa(funcao) {
    funcao()
}

qualquerCoisa(function() {console.log('Executanto uma função interna')})

function calcularImposto(funcao, valor) {
    funcao(valor)
}

calcularImposto(
    function(valor) {
        let imposto = valor * 0.05
        console.log(`O individuo irá pagar ${imposto} reias de imposto.`)
    }, 2500
)

// Argumentos variaveis nas funções
function multiplicar() {
    let multiplicar = 1
    for (i in arguments) {
        multiplicar *= arguments[i]
    }
    return {multiplicar, arguments}
}

console.log(multiplicar())
console.log(multiplicar(6))
console.log(multiplicar(10, 10, 10))
console.log(multiplicar(1000, 1000, 1000))

function novaSoma(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0) {
    let somaTudo = a + b + c + d + e + f + g
    return somaTudo
}

console.log(novaSoma(3, 4))
