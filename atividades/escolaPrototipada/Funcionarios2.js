export const Funcionarios = {
    nome: '',
    cargo: '',
    salario: '',
    turno: '',
    alterarNome: function(novoNome) {
        this.nome = novoNome
    },
    alterarCargo: function(novoCargo) {
        this.cargo = novoCargo
    },
    alterarSalario: function(novoSalario) {
        this.salario = novoSalario
    },
    alterarTurno: function(novoTurno) {
        this.turno = novoTurno
    }
}
