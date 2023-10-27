const listaMateria = async () => {
    const respostaRequisicao = await fetch("http://localhost:3000/body")

    if (respostaRequisicao.ok) {
        return respostaRequisicao.json();
    }
    throw new Error('Não foi possível listar as matérias');
}

const adicionaMateria = async (objForm) => {
    const respostaRequisicao = await fetch("http://localhost:3000/body", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: objForm.name,
            teste_1: objForm.test1,
            teste_2: objForm.test2,
            activities: objForm.activities
        })
    });
    if (respostaRequisicao.ok) {
        return respostaRequisicao.body;
    }
    throw new Error('Nao foi possivel criar uma nova matéria');
}

const exibeMaterias = async (id) => {
    const respostaRequisicao = await fetch(`http://localhost:3000/body/${id}`)

    if (respostaRequisicao.ok) {
        return respostaRequisicao.json();
    }
    throw new Error('Não foi possível exibir as matérias');
}

const atualizaMaterias = async (id, objForm) => {
    const respostaRequisicao = await fetch(`http://localhost:3000/body/${id}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: objForm.name,
            teste_1: objForm.test1,
            teste_2: objForm.test2,
            activities: objForm.activities
        })
    });
    console.log("Resposta da requisição:", respostaRequisicao);

    if (respostaRequisicao.ok) {
        return respostaRequisicao.body;
    }
    throw new Error('Não foi possível atualizar as matérias');
}

const deletaMaterias = async (id) => {
    const response = await fetch(`http://localhost:3000/body/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw Error('Não foi possível excluir a matéria.');
    }
};

export const objService = {
    listaMateria,
    adicionaMateria,
    exibeMaterias,
    atualizaMaterias,
    deletaMaterias
}