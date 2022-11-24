import { Paciente } from "../models/paciente.js";

export class PacienteController {
    #inputNome;
    #inputSobrenome;
    #inputPeso;
    #inputAltura;

    constructor() {
        this.#inputNome = document.querySelector('#nome');
        this.#inputSobrenome = document.querySelector('#sobrenome');
        this.#inputPeso = document.querySelector('#peso');
        this.#inputAltura = document.querySelector('#altura');
    }

    criarPaciente() {
        let nome = this.#inputNome.value;
        let sobrenome = this.#inputSobrenome.value;
        let peso = this.#inputPeso.value;
        let altura = this.#inputAltura.value;
        let paciente = new Paciente(nome, sobrenome, peso, altura);
        console.log(paciente);
    }

}
