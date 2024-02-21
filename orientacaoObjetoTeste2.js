// Testando a orientação a objetos
class Professor {
    constructor(nome, materia, cpf) {
        this.nome = nome
        this.materia = materia // atributos da classe
        this._cpf = cpf // dado privado
    }
    get obterNome() {
        return this.nome // pegar o dado com o metodo get
    }
    mostrarNome() {
        return this.nome // pegar o dado sem o uso do get
    }
    /**
     * @param {any} novoNome
     */
    set alterarNome(novoNome) {
        this.nome = novoNome // alterar dados com o uso do set
    }
    get obterMateria() {
        return this.materia
    }
    /**
     * @param {any} novaMateria
     */
    set alterarMateria(novaMateria) {
        return this.materia = novaMateria
    }
    get cpf() {
        return this._cpf
    }
}
const professor1 = new Professor('Paulo', 'JavaScript', 1932848)
console.log(professor1.obterNome)
console.log(professor1.obterMateria)
console.log(professor1.cpf)
console.log(professor1) // imprimindo todos os dados
professor1.alterarNome = 'Junior'
console.log(professor1) // alterando dado 











