import {Veiculos} from './Veiculos.js'
export class Motos extends Veiculos {
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco, tipoDeMoto, caracteristicasMotos) {
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidadeDeVeiculos, preco)
        this.tipoDeMoto = tipoDeMoto
        this.caracteristicasMotos = caracteristicasMotos
    }
    get obterTipoDeMoto() {
        return this.tipoDeMoto
    }
    get obterCaracteristicasMotos() {
        return this.caracteristicasMotos
    }
    /**
     * @param {any} novoTipoDeMoto
     */
    set alterarTipoDeMoto(novoTipoDeMoto) {
        this.tipoDeMoto = novoTipoDeMoto
    }
    /**
     * @param {any} novasCaracteristicasMotos
     */
    set alterarCaracteristicasMotos(novasCaracteristicasMotos) {
        this.caracteristicasMotos = novasCaracteristicasMotos
    }
}
