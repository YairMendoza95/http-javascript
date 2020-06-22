const CRUD_URL = 'https://reqres.in/api/users';

const getUsuario = async (id) => {
    const res = await fetch(`${CRUD_URL}/${id}`);
    const {
        data
    } = await res.json();

    return data;
};

const crearUsuario = async (usuario) => {
    const res = await fetch(CRUD_URL, {
        method: 'POST',
        body: JSON.stringify(usuario),
        header: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
};

const actualizarUsuario = async (id, usuario) => {
    const res = await fetch(`${CRUD_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
};

const deleteUsuario = async (id) => {
    const res = await fetch(`${CRUD_URL}/${id}`, {
        method: 'DELETE'
    });

    return (res.ok) ? 'Borrado' : 'Nose pudo eliminar el usuario';
};

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    deleteUsuario
};