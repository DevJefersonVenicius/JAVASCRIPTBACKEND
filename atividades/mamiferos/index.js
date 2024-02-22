import { Cachorros } from './Cachorros.js'
import { Gatos } from './Gatos.js'

let bob = new Cachorros('Bob', 'Pug', 4)
let mel = new Gatos('Mel', 'Balinês', 4)

console.log(bob)
console.log(`Olá meu nome é ${bob.obterNome}, tenho ${bob.obterPatas} patas e sou da raça ${bob.obterRaca}.`)
console.log(bob.obterNome)
console.log(bob.obterRaca)
console.log(bob.obterPatas)
bob.mudarNome = 'Juan'
console.log(bob)
bob.mudarRaca = 'Pitbul'
console.log(bob)
bob.mudarPatas = 3
console.log(bob)

console.log(mel)
console.log(`Olá meu nome é ${mel.obterNome}, tenho ${mel.obterPatas} patas e sou da raça ${mel.obterRaca}.`)
console.log(mel.obterNome)
console.log(mel.obterRaca)
console.log(mel.obterPatas)
mel.mudarNome = 'Juan'
console.log(mel)
mel.mudarRaca = 'Pitbul'
console.log(mel)
mel.mudarPatas = 3
console.log(mel)

function tipoMamifero(valor) {
    if ( valor === 'Miauuuu' ) {
        console.log('Você é dona(o) de um(a) gata(o)')
    } else if ( valor === 'Auauuuu' ) {
        console.log('Você é dona(o) de um(a) cachorra(o)')

    } else {
        console.log('Não foi possivel definir seu tipo de Mamifero')
    }
}

tipoMamifero(bob.late)
tipoMamifero(mel.mia)