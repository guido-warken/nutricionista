import { PacienteController } from '../controllers/pacienteController.js';

const controller = new PacienteController();

const handleSubmit = (e) => {
    e.preventDefault();
    controller.criaPaciente();
};

let formulario = document.querySelector('.form');
formulario.addEventListener('submit', handleSubmit);
