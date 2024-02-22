import { Mamifero } from './Mamifero.js'

export class Cachorros extends Mamifero {
    constructor(nome, raca, patas) {
        super(patas)
        this.nome = nome
        this.raca = raca
        this.late = 'Auau'
    }
    get obterNome() {
        return this.nome
    }
    get obterRaca() {
        return this.raca
    }
    get obterLatido() {
        return this.late
    }
    /**
     * @param {any} novoNome
     */
    set mudarNome(novoNome) {
        this.nome = novoNome
    }
    /**
     * @param {any} novaRaca
     */
    set mudarRaca(novaRaca) {
        this.raca = novaRaca
    }
}