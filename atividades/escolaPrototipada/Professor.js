import { Funcionarios } from './Funcionarios.js';

export const Professor = {
    Funcionarios,
    materia: '',
    alterarMateria: function(novaMateria) {
        this.materia = novaMateria;
    }
}
