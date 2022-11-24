import { PacienteController } from "../controllers/paciente-controller.js";

let controller = new PacienteController();
let formulario = document.querySelector('.form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.criarPaciente();
});
