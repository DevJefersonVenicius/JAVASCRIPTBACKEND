import {Veiculos} from './Veiculos.js'
export class Carros extends Veiculos {
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco, tipoDeCarro, caracteristicasCarro) {
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco)
        this.tipoDeCarro = tipoDeCarro
        this.caracteristicasCarro = caracteristicasCarro
    }
    get obterTipoDeCarro() {
        return this.tipoDeCarro
    }
    get obterCaracteristicasCarro() {
        return this.caracteristicasCarro
    }
    /**
     * @param {any} novoTipoDeCarro
     */
    set alterarTipoDeCarro(novoTipoDeCarro) {
        this.tipoDeCarro = novoTipoDeCarro
    }
    /**
     * @param {any} novaCaracteristicaCarro
     */
    set alterarCaracteristicasCarro(novaCaracteristicaCarro) {
        this.caracteristicasCarro = novaCaracteristicaCarro
    }
}
