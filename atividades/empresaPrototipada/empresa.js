const empresa = {
    nomeEmpresa: "Nome da empresa",
    servicos: "Serviçõs ofertados pela empresa",
    quantidadeDeFuncionarios: "Números de funcionarios da empresa",
}

const funcionario = {
    nomeFuncionario: "Nome do funcionario",
    cpf: "Cpf do funcionario",
    cargo: "Cargo do funcionario",
    salario: "Salario do funcionario",
    alterarSalario: function(novoSalario) {
        if (novoSalario < this.salario) {
            console.log('Você não pode alterar o salario para um salario inferior ao anterior.')
         } else if (novoSalario > this.salario) {
            this.salario === novoSalario
            console.log(`O salario de ${this.salario} foi alterado para ${novoSalario}`)
            return
        } else {
            console.log(`O salario não foi modificado`)
        }
    }
}

Object.setPrototypeOf(funcionario, empresa)
funcionario.nomeEmpresa = 'Lux'
funcionario.servicos =  'Venda de produtos de beleza'
funcionario.nomeFuncionario = 'José Silva'
funcionario.cpf = '102.284.903-34'
funcionario.cargo = 'Vendedor autonomo'
funcionario.salario = 1400
console.log(funcionario.alterarSalario(1500))
console.log(funcionario)
