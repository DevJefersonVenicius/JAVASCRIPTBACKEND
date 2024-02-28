import {Veiculos} from './Veiculos.js'
export class VeiculosNovos extends Veiculos {
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco, localizacao) {
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco)
        this.localizacao = localizacao
        this.emplacado = false
        this.taxaDeEmplacamento = 0
        this.statusDeVenda = false
    }
    get obterLocalizacao() {
        return this.localizacao
    }
    get obterEmplacado() {
        return this.emplacado
    }
    get obterTaxaDeEmplacamento() {
        return this.taxaDeEmplacamento
    }
    get obterStatusDeVenda() {
        return this.statusDeVenda
    }
    /**
     * @param {any} novaLocalizacao
     */
    set alterarLocalizacao(novaLocalizacao) {
        this.localizacao = novaLocalizacao
    }
    /**
     * @param {boolean} novoStatus
     */
    set alterarEmplacamento(novoStatus) {
        this.emplacado = novoStatus
    }
    /**
     * @param {number} novaTaxaDeEmplacamento
     */
    set alterarTaxaDeEmplacamento(novaTaxaDeEmplacamento) {
        this.taxaDeEmplacamento = novaTaxaDeEmplacamento
    }
    /**
     * @param {boolean} novoStatusDeVenda
     */
    set alterarStatusDeVenda(novoStatusDeVenda) {
        this.statusDeVenda = novoStatusDeVenda
    }
}
