export class Paciente {
    #nome;
    #sobrenome;
    #peso;
    #altura;

    constructor(nome, sobrenome, peso, altura) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#peso = peso;
        this.#altura = altura;
    }

    equals(outroPaciente) {
        if (!outroPaciente instanceof Paciente) {
            return false;
        }
        return this.#nome === outroPaciente.#nome && this.#sobrenome === outroPaciente.#sobrenome;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get peso() {
        return this.#peso;
    }

    get altura() {
        return this.#altura;
    }

    set peso(peso) {
        this.#peso = peso;
    }

}
