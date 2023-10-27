import { objService } from "../services/service.js";

const forms = document.querySelector('[data-forms]');
forms.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputsForms = {
        name: event.target.querySelector('#inputName').value,
        test1: event.target.querySelector('#inputTest1').value,
        test2: event.target.querySelector('#inputTest2').value,
        activities: event.target.querySelector('#inputActivities').value,
    }

    objService.adicionaMateria(inputsForms);
});