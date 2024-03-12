export class Biblioteca {
    constructor(nomeBiblioteca) {
        this.nomeBiblioteca = nomeBiblioteca
    }
    get obterNomeBiblioteca() {
        return this.nomeBiblioteca
    }
    set setNomeBiblioteca(novoNomeBiblioteca) {
        this.nomeBiblioteca = novoNomeBiblioteca
    }
}
