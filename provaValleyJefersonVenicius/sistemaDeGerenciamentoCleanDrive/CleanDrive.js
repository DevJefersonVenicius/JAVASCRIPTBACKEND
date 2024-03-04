import {LavaJato} from './LavaJato.js'
export class CleanDrive extends LavaJato {
    constructor(nome, localizacao, receberVeiculo) {
        super(nome, localizacao)
        this.receberVeiculo = receberVeiculo
        this.horarioDeEntregaVeiculo = new Date('')
        this.horarioDePrazo = new Date('')
    }
    get obterRecebimentoDeVeiculo() {
        return this.receberVeiculo
    }
    get obterHorarioEntregaVeiculo() {
        return this.horarioDeEntregaVeiculo
    }
    get obterHorarioPrazo() {
        return this.horarioDePrazo
    }
    /**
     * @param {any} novoRecebimento
     */
    set alterarRecebimentoDeVeiculo(novoRecebimento) {
        if (novoRecebimento < 0 || novoRecebimento === this.receberVeiculo) {
            console.log(`Novo recebimento de veiculos invalido`)
         } else if (novoRecebimento > 0) {
            this.receberVeiculo += novoRecebimento
            console.log(`O total de carros recebidos no lava jato aumentou de ${this.receberVeiculo} para ${novoSalario}`)
        }
    }
    set alterarHorarioEPrazo(prazo) {
        if (prazo > this.horarioDePrazo) {
            console.log('Veiculo entregue no prazo')
        } else {
            console.log('O veiculo não foi entregue no prazo')
        }    
    }
}