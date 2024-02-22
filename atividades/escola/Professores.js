import {Funcionarios} from './Funcionarios.js'

export class Professores extends Funcionarios{
    constructor(nome, cargo, salario, turno, materia) {
        super(nome, cargo, salario, turno)
        this.materia = materia
    }
    get obterMateria() {
        return this.materia 
    }
    /**
     * @param {any} novaMateria
     */
    set alterarMateria(novaMateria) {
        this.materia = novaMateria
    }
}