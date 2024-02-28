import {Celular} from './Celular.js'

export class Motorola extends Celular{
    constructor(nome, modelo, anoFabricado, garantia, cor, tamanho, memoriaRam, armazenamento, processador, sistema) {
        super(cor, tamanho, memoriaRam, armazenamento, processador, sistema),
        this.nome = nome
        this.modelo = modelo
        this,anoFabricado = anoFabricado
        this.garantia = garantia
    }
    get obterNome() {
        return this.nome
    }
    get obterModelo() {
        return this.modelo
    }
    get obterAnoFabricado() {
        return this.anoFabricado
    }
    get obterGarantia() {
        return this.garantia
    }
    set alterarNome(novoNome) {
        this.nome = novoNome
    }
    set alterarModelo(novoModelo) {
        this.modelo = novoModelo
    }
    set obterAnoFabricado(novoAnoFabricado) {
        this.anoFabricado = novoAnoFabricado
    }
    set alterarGarantica(novaGarantia) {
        this.garantia = novaGarantia
    }
}
