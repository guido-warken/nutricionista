import { Paciente } from "../models/paciente.js";
import { PacienteList } from "../models/paciente-list.js";

export class PacienteController {
    #inputNome;
    #inputSobrenome;
    #inputPeso;
    #inputAltura;
    #listaPacientes;

    constructor() {
        this.#inputNome = document.querySelector('#nome');
        this.#inputSobrenome = document.querySelector('#sobrenome');
        this.#inputPeso = document.querySelector('#peso');
        this.#inputAltura = document.querySelector('#altura');
        this.#listaPacientes = new PacienteList();
    }

    criarPaciente() {
        let nome = this.#inputNome.value;
        let sobrenome = this.#inputSobrenome.value;
        let peso = this.#inputPeso.value;
        let altura = this.#inputAltura.value;
        let paciente = new Paciente(nome, sobrenome, peso, altura);
        this.#listaPacientes.adiciona(paciente);
        console.log(this.#listaPacientes.pacientes);
        this.#listaPacientes.remove(paciente);
        console.log(this.#listaPacientes.pacientes)
    }

}
