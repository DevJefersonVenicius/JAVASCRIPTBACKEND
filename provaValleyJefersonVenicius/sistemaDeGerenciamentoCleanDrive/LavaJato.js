export class LavaJato {
    constructor(nome, localizacao) {
        this.nome = nome
        this.localizacao = localizacao
    }
    get obterNome() {
        return this.nome
    }
    get obterLocalizacao() {
        return this.localizacao
    }
    /**
     * @param {any} novoNome
     */
    set alterarNome(novoNome) {
        this.nome = novoNome
    }
    /**
     * @param {any} novaLocalizacao
     */
    set alterarLocalizacao(novaLocalizacao) {
        this.localizacao = novaLocalizacao
    }
}
