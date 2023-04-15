import { Paciente } from '../models/paciente.js';
import { PacienteList } from '../models/pacienteList.js';

export class PacienteController {
    #campoNome;
    #campoSobrenome;
    #campoPeso;
    #campoAltura;
    #listaPacientes;

    constructor() {
        this.#campoNome = document.getElementById('nome');
        this.#campoSobrenome = document.getElementById('sobrenome');
        this.#campoPeso = document.getElementById('peso');
        this.#campoAltura = document.getElementById('altura');
        this.#listaPacientes = new PacienteList();
    }

    criaPaciente() {
        let nome = this.#campoNome.value;
        let sobrenome = this.#campoSobrenome.value;
        let peso = this.#campoPeso.value;
        let altura = this.#campoAltura.value;
        let paciente = new Paciente(nome, sobrenome, peso, altura);
        this.#listaPacientes.adiciona(paciente);
        this.#limpaFormulario();
        console.log(this.#listaPacientes.pacientes);
    }

    #limpaFormulario() {
        this.#campoAltura.value = '';
        this.#campoNome.value = '';
        this.#campoSobrenome.value = '';
        this.#campoPeso.value = '';
        this.#campoNome.focus();
    }
}