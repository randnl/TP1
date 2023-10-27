import { objService } from '../services/service.js';


const newRow = (name, test1, test2, activities, id) => {
    const novaLinha = document.createElement('tr');
    const template = `<tr>
        <td>${name}</td>
        <td>${test1}</td>
        <td>${test2}</td>
        <td>${activities}</td>
        <td>80</td>
        <td class="d-flex justify-content-between">
            <button type="button" class="btn btn-warning">
                <a class="text-decoration-none d-flex" href="screens/content/editInformations.html?id=${id}">
                    <span class="material-symbols-sharp text-white">edit</span>
                </a>
            </button>
            <button type="button" class="btn btn-danger d-flex align-items-center justify-content-center">
                <span class="material-symbols-sharp text-black">delete_forever</span>
            </button>
        </td>
    </tr>`
    novaLinha.innerHTML = template;
    novaLinha.dataset.id = id;
    return novaLinha;
}

const table = document.querySelector('[data-table]');
table.addEventListener('click', async (event) => {
    let isDeleteButton = event.target.matches('.material-symbols-sharp');

    if (isDeleteButton) {
        const row = event.target.closest('[data-id]');
        let id = row.dataset.id;

        try {
            await objService.deletaMaterias(id);
            row.remove();
        } catch (error) {
            console.log(error);
        }
    }
});


const render = async () => {
    try {
        const respostaRequisicao = await objService.listaMateria()

        respostaRequisicao.forEach((element) => {
            table.appendChild(newRow(element.name, element.teste_1, element.teste_2, element.activities, element.id))
        })
    } catch (error) {
        console.log(error);
    }
}
render();