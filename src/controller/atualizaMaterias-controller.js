import { objService } from "../services/service.js";

(async () => {
    const getURL = new URL(window.location);
    const id = getURL.searchParams.get('id');

    const dataForm = {
        name: document.querySelector("#inputName"),
        test1: document.querySelector("#inputTest1"),
        test2: document.querySelector("#inputTest2"),
        activities: document.querySelector("#inputActivities"),
    }

    try {
        const datas = await objService.exibeMaterias(id);

        dataForm.name.value = datas.name;
        dataForm.test1.value = datas.teste_1;
        dataForm.test2.value = datas.teste_2;
        dataForm.activities.value = datas.activities;
    } catch (erro) {
        console.log(erro);
    }

    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const dataForm = {
            name: document.querySelector("#inputName").value,
            test1: document.querySelector("#inputTest1").value,
            test2: document.querySelector("#inputTest2").value,
            activities: document.querySelector("#inputActivities").value,
        };

        try {
            await objService.atualizaMaterias(id, dataForm);
        } catch (erro) {
            console.log(erro);
        }
    });

})()