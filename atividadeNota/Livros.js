import {Biblioteca} from './Biblioteca.js'
export class Livro extends Biblioteca {
    constructor(nomeBiblioteca, nomeLivro, autor, ano, genero, totalDeLivros) {
        super(nomeBiblioteca)
        this.nomeLivro = nomeLivro
        this.autor = autor
        this.ano = ano
        this.genero = genero
        this.totalDeLivros = totalDeLivros
        this.dataEmprestimo = new Date()
        this.dataEntrega = new Date()
    }
    get obterNomeLivro() {
        return this.nomeLivro
    }
    get obterAutor() {
        return this.autor
    }
    get obterAno() {
        return this.ano
    }
    get obterGenero() {
        return this.genero
    }
    get obterTotalDeLivros() {
        return this.totalDeLivros
    }
    set setNomeLivro(novoNomeLivro) {
        this.nomeLivro = novoNomeLivro
    }
    set setAutor(novoAutor) {
        this.autor = novoAutor
    }
    set setAno(novoAno) {
        this.ano = novoAno
    }
    set setGenero(novoGenero) {
        this.genero = novoGenero
    }
    set setTotalDeLivros(novoTotal) {
        this.totalDeLivros = novoTotal
    }
    emprestar() {
        if (this.dataEntrega > this.dataEmprestimo) {
            console.log('O livro está na data de emprestimo')
        } else {
            console.log('O livro deve ser entregue')
        }    
    } 
}
