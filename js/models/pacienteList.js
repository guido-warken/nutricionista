import { Paciente } from './paciente.js';

export class PacienteList {
    #pacientes;

    constructor() {
        this.#pacientes = [];
    }

    adiciona(paciente) {
        if (!paciente instanceof Paciente) {
            throw new Error('Favor adicionar um paciente na lista de pacientes');
        }
        this.#pacientes.push(paciente);
    }

    get pacientes() {
        return [].concat(this.#pacientes);
    }
}