import { BichinhoVirtual } from './BichinhoVirtual.js'

export class Caozinho extends BichinhoVirtual {
    constructor(nome) {
        super(nome)
        this.energia = 100
        this.brincar = 0
        this.dormir = false
    }
    get obterEnergia() {
        return this.energia;
    }
    get obterBrincar() {
        return this.brincar;
    }
    get obterDormida() {
        return this.dormir;
    }
    /**
     * @param {boolean} novoDormir
     */
    set mudarDormir(novoDormir) {
        this.dormir = novoDormir;
    }
    brincarComPet(totalBrincadeiras) {
        while (totalBrincadeiras) {
            console.log(`Bem-vindo(a) ao jogo com seu Pet ${this.nome}!`)
            console.log(`Energia atual: ${this.energia}`)
            console.log(`Nível de brincadeira atual: ${this.brincar}`)
            if (this.brincar === 0) {
                console.log("Seu pet quer brincar! Brinque com ele!")
                const totalBrincadeiras = Number(prompt('Digite o total de brincadeiras a fazer com seu Pet: '));
                this.energia -= totalBrincadeiras
                this.brincar += totalBrincadeiras
                return totalBrincadeiras
            } else if (this.brincar >= 85) {
                console.log('Seu Pet precisa dormir!')
                let dormirPet = prompt('Coloque seu Pet para dormir: ("S" para sim e "N" para não): ')
                if (dormirPet.toUpperCase() === 'S' || dormirPet.toUpperCase() === 'N') {
                    this.dormir = true
                    console.log('Seu Pet está dormindo.')
                    break
                }
            }
        }
    }
}

import promptSync from 'prompt-sync'
const prompt = promptSync()
