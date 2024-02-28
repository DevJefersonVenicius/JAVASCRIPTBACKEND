export class Celular {
    constructor(cor, tamanho, memoriaRam, armazenamento, processador, sistema) {
        this.cor = cor
        this.tamanho = tamanho
        this.memoriaRam = memoriaRam
        this.armazenamento = armazenamento
        this.processador = processador
        this.sistema = sistema
    }
    get obterCor() {
        return this.cor
    }
    get obterTamanho() {
        return this.tamanho
    }
    get obterRam() {
        return this.memoriaRam
    }
    get obterArmazenamento() {
        return this.armazenamento
    }
    get obterProcessador() {
        return this.processador
    }
    get obterSistema() {
        return this.sistema
    }
    set alterarCor(novaCor) {
        this.cor = novaCor
    }
    set alterarTamanho(novoTamanho) {
        this.tamanho = novoTamanho
    }
    set alterarRam(novaRam) {
        this.memoriaRam = novaRam
    }
    set alterarArmazenamento(novoArmazenamento) {
        this.armazenamento = novoArmazenamento
    }
    set alterarProcessador(novoProcessador) {
        this.processador = novoProcessador
    }
    set alterarSistema(novoSistema) {
        this.sistema = novoSistema
    }
}
