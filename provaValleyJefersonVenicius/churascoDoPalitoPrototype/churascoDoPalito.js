const churasco = {
    nome: 'Nome do estabelecimento',
    localizacao: 'Localização do estabelecimento',
}
const churascoNoPalito = {
    numeroDoCliente: 0,
    fazerPedido: [
        'frango',
        'carne bovina',
        'carne suina',
    ],
    valorConta: function() { 
        if (this.fazerPedido === 'frango') {
            return 'Você pediu frango e irá pagar 8 reias'
        } else if (this.fazerPedido === 'carne bovina') {
            return 'Você pediu carne bovina e irá pagar 12 reias'
        } else if (this.fazerPedido === 'carne suina') {
            return 'Você pediu carne suina e irá pagar 10 reais'
        }
    },
    dia: 'Dia do atendimento',
    horas: 'Horario de atendimento',
}
Object.setPrototypeOf(churascoNoPalito, churasco)
churascoNoPalito.nome = 'Churasco No Palito'
churascoNoPalito.localizacao = 'Centro Amontada CE'
churascoNoPalito.numeroDoCliente = 1
churascoNoPalito.dia = new Date('February 29, 2024 20:30:00')
console.log(churascoNoPalito.dia)
churascoNoPalito.horas = churascoNoPalito.dia.getDay()
console.log(`Você foi ao ${churascoNoPalito.nome} no dia ${churascoNoPalito.horas}`)
churascoNoPalito.horas = churascoNoPalito.dia.getHours()
console.log(`O horario de atendimento começou ás ${churascoNoPalito.horas} horas.`)
churascoNoPalito.fazerPedido = 'frango'
console.log(churascoNoPalito.valorConta())
churascoNoPalito.fazerPedido = 'carne suina'
console.log(churascoNoPalito.valorConta())
