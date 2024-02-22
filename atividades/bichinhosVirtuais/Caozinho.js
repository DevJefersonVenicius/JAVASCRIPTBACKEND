import { BichinhoVirtual } from './BichinhoVirtual.js'

export class Caozinho extends BichinhoVirtual {
    constructor(nome) {
        super(nome)
        this.energia = 100
        this.brincar = 0
        this.dormir = false
    }

    get obterEnergia() {
        return this.energia
    }

    get obterBrincar() {
        return this.brincar
    }
    /**
     * @param {boolean} novoDormir
     */
    set mudarDormir(novoDormir) {
        this.dormir = novoDormir
    }
    brincarComPet(totalBrincadeiras) {
        if (this.brincar === 0) {
            console.log(`Seu Pet está com a energia em ${this.energia} e o nível de brincadeira está em ${this.brincar}.`)
            console.log("Seu pet quer brincar! Brinque com ele!")
            this.energia -= totalBrincadeiras 
            this.brincar += totalBrincadeiras
            let totalBrincadeiras = Number(prompt('Digite o total de  brincadeiras a fazer com seu Pet: '))
        } else if (this.brincar >= 85) {
            console.log('Seu Pet precisa dormir!')
            let dormirPet = prompt('Coloque seu Pet para dormir: ("S" para sim e "N" para não): ')
            if (dormirPet.toUpperCase() === 'S' && 'N') {
                this.dormir = true
                console.log('Seu Pet está dormindo.')
            } return totalBrincadeiras
        }
    } 
    iniciar() {
        console.log(`Bem-vindo(a) ao jogo com o seu Cãozinho virtual, ${this.nome}!`)
        console.log(`Energia atual: ${this.energia}`)
        console.log(`Nível de brincadeira atual: ${this.brincar}`)
        const totalBrincadeiras = prompt('Digite o total de brincadeiras para fazer com seu Pet: ')
        this.brincarComPet(totalBrincadeiras)
    }
}
