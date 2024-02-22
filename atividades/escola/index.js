// Execuções
import {Funcionarios} from './Funcionarios.js'
import {Professores} from './Professores.js'
let funionario1 = new Funcionarios('Jeferson', 'Motorista', 1412, 'DIURNO')
let professor = new Professores('Paulo Junior', 'Desenvolvedor', 10000, 'Diurno', 'Back-End e Front-End')
console.log(funionario1)
console.log(funionario1.obterNome)
console.log(funionario1.salario)
console.log(professor)
console.log(professor.obterNome)
console.log(professor.salario)