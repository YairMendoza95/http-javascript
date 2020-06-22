import {
    obtenerUsuarios
} from './http.provider';

const body = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement("div");
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector("tbody");
};

const crearFilaUsuario = (usuario) => {
    correlativo++;
    const html = `
        <td scope="col">${correlativo}</td>
        <td scope="col">${usuario.email}</td>
        <td scope="col">${
            usuario.first_name + " " + usuario.last_name
        }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement("tr");
    tr.innerHTML = html;
    tbody.append(tr);

};

export const init = async () => {
    crearHtml();
    /*
    Esta forma es correcta pero se puede reducir a una sola linea

    const usuarios = await obtenerUsuarios();

    usuarios.forEach(crearFilaUsuario);
    */
    (await obtenerUsuarios()).forEach(crearFilaUsuario);
};