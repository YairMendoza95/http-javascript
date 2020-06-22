import {
    obtenerChiste
} from "./http.provider";

const body = document.body;
let olList, btnOtro;

const crearChisteHTML = () => {
    const hmtl = `
        <h1 class = "mt-5"> Chistes </h1> 
        <hr>
        <button class = "btn btn-primary"> Otro chiste </button> 
        <ol class = "mt-2 list-group">
        </ol>
    `;

    const divChiste = document.createElement('div');
    divChiste.innerHTML = hmtl;

    body.append(divChiste);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });
}

const dibujarChiste = (chiste) => {
    const liChiste = document.createElement('li');

    liChiste.innerHTML = `<b>${chiste.id}:</b> ${chiste.value}`;
    liChiste.classList.add('list-group-item');
    olList.append(liChiste)
};

export const init = () => {
    crearChisteHTML();
    eventos();
}