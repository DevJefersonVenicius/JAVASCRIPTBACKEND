export class Veiculos {
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco) {
        this.marca = marca
        this.modelo = modelo
        this.placa = placa
        this.cor = cor
        this.anoDeFabricacao = anoDeFabricacao
        this.tipoDeCombustivel = tipoDeCombustivel
        this.quantidadeDeVeiculos = quantidadeDeVeiculos
        this._preco = preco
    }
    get obterMarca() {
        return this.marca
    }
    get obterModelo() {
        return this.modelo
    }
    get obterPlaca() {
        return this.placa
    }
    get obterCor() {
        return this.cor
    }
    get obterAnoDeFabricacao() {
        return this.anoDeFabricacao
    }
    get obterTipoDeCombustivel() {
        return this.tipoDeCombustivel
    }
    get obterQuantidadeDeVeiculos() {
        return this.quantidadeDeVeiculos
    }
    get obterPreco() {
        return this._preco
    }
    /**
     * @param {any} novaMarca
     */
    set alterarMarca(novaMarca) {
        this.marca = novaMarca
    }
    /**
     * @param {any} novoModelo
     */
    set alterarModelo(novoModelo) {
        this.modelo = novoModelo
    }
    /**
     * @param {any} novaPlaca
     */
    set alterarPlaca(novaPlaca) {
        this.placa = novaPlaca
    }
    /**
     * @param {any} novaCor
     */
    set alterarCor(novaCor) {
        this.cor = novaCor
    }
    /**
     * @param {any} novoAnoDeFabricacao
     */
    set alterarAnoDeFabricacao(novoAnoDeFabricacao) {
        this.anoDeFabricacao = novoAnoDeFabricacao
    }
    /**
     * @param {any} novoTipoDeCombustivel
     */
    set alterarTipoDeCombustivel(novoTipoDeCombustivel) {
        this.tipoDeCombustivel = novoTipoDeCombustivel
    }
    /**
     * @param {any} novaQuantidadeDeVeiculos
     */
    set alterarQuantidadeDeVeiculos(novaQuantidadeDeVeiculos) {
        if (this.quantidadeDeVeiculos != 0) {
            if (novaQuantidadeDeVeiculos > 0) {
            this.quantidadeDeVeiculos += novaQuantidadeDeVeiculos
        } else {
            if (this.quantidadeDeVeiculos < Math.abs(novaQuantidadeDeVeiculos)) {
                console.log(`Você tem ${this.quantidadeDeVeiculos} impossivel retirar ${novaQuantidadeDeVeiculos}`)
            } else {
                this.quantidadeDeVeiculos += novaQuantidadeDeVeiculos
            }
        }
    } else {
        if(novaQuantidadeDeVeiculos > 0) {
                this.quantidadeDeVeiculos += novaQuantidadeDeVeiculos
            } else {
                console.log(`Você tem ${this.quantidadeDeVeiculos} impossivel retirar ${Math.abs(novaQuantidadeDeVeiculos)}`) 
            }
        }
    }
    set alterarPreco(novoPreco) {
        this._preco = novoPreco
    }
}
