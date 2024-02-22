// usando o estrutura de repetição while
const prompt = require('prompt-sync')()
let contador =  0

while (contador < 10) {
    contador ++ // pode usar ++ e += para imprimir os numeros
    console.log(contador)
}

while (true) {
    let saida = prompt('Informe s para sair: ')
    if (saida.toLowerCase() === 's') {
        break
    }
}
