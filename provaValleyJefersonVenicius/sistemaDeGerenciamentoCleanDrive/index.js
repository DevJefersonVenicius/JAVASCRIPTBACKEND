import { LavaJato } from "./LavaJato.js";
import { CleanDrive } from "./cleanDrive.js";

const meuLavaJato = new LavaJato('Clean Drive', 'Amontada-CE')
console.log(meuLavaJato)
console.log(meuLavaJato.obterNome)
console.log(meuLavaJato.obterLocalizacao)

const cleanDrive = new CleanDrive('Clean Drive', 'Amontada-CE', 20)
console.log(cleanDrive.obterNome)
console.log(cleanDrive.obterLocalizacao)
console.log(cleanDrive.obterRecebimentoDeVeiculo)
console.log(cleanDrive.obterHorarioEntregaVeiculo)
console.log(cleanDrive.obterHorarioPrazo)
cleanDrive.horarioDeEntregaVeiculo = new Date('February 29, 2024 20:30:00')
cleanDrive.horarioDePrazo = (new Date('2024-05-02'))