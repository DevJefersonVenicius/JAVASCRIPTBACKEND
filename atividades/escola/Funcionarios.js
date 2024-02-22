export class Funcionarios {
    constructor(nome, cargo, salario, turno) {
        this._nome = nome
        this._cargo = cargo
        this._salario = salario
        this._turno = turno 
    }
    get obterNome() {
        return this._nome
    }
    get obterCargo() {
        return this._cargo
    }
    get obterSalario() {
        return this._salario
    }
    get obterTurno() {
        return this._turno
    } // GETS 
    /**
     * @param {any} novoNome
     */
    set alterarNome(novoNome) {
        this._nome = novoNome
    }
    /**
     * @param {any} novoCargo
     */
    set alterarCargo(novoCargo) {
        this._cargo = novoCargo
    }
    /**
     * @param {any} novoSalario
     */
    set alterarSalario(novoSalario) { 
        if (this._salario < novoSalario) {
            this._salario = novoSalario
        } else {
            return `Novo salario não pode ser menor que ${this._salario}`
        }
    }
    /**
     * @param {any} novoTurno
     */
    set alterarTurno(novoTurno) {
        if (this._turno === novoTurno) {
            return `Seu turno já é: ${this._turno}`
        } else {
            this._turno = novoTurno
        }
    } // SETS
}