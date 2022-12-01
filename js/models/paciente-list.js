export class PacienteList {
    #pacientes;

    constructor() {
        this.#pacientes = [];
    }

    adiciona(paciente) {
        this.#pacientes.push(paciente);
    }

    remove(paciente) {
        for (let contador = 0; contador < this.#pacientes.length; contador++) {
            const pacienteDaLista = this.#pacientes[contador];
            if (pacienteDaLista.equals(paciente)) {
                this.#pacientes.splice(contador, 1);
            }

        }

    }

    get pacientes() {
        return [].concat(this.#pacientes)
    }

}
