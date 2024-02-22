// Faça a abstração da superclasse BichinhoVirtual. Você deve ter atributos: nome, energia, brincar e dormir.
// Regras: ao brincar com o bichinho gasta-se energia e se a energia atingir um nivel de 0 ele deve dormir para recarregar sua energia.
export class BichinhoVirtual {
    constructor(nome) {
        this.nome = nome
    }
    get obterNome() {
        return this.nome
    }
    /**
     * @param {any} novoNome
     */
    set mudarNome(novoNome) {
        this.nome = novoNome
    }
}