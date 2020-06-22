const JOKE_URL = "https://api.chucknorris.io/jokes/random";
const USER_URL = "https://reqres.in/api/users?page=2";

// Cloudinary
const CLOUD_URL =
    "https://api.cloudinary.com/v1_1/ezio9516/image/upload";
const CLOUD_PRESET = "mrqh0zzc";

const obtenerChiste = async () => {
    try {
        const res = await fetch(JOKE_URL);

        if (!res.ok) throw "No se pudo realizar la petición";

        const { icon_url, id, value } = await res.json();

        return {
            icon_url,
            id,
            value,
        };
    } catch (err) {
        throw err;
    }
};

const obtenerUsuarios = async () => {
    try {
        const res = await fetch(USER_URL);
        const { data } = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
    //console.log(data);
};

const subirImagen = async (imagen) => {
    const formData = new FormData();
    formData.append("upload_preset", CLOUD_PRESET);
    formData.append("file", imagen);

    try {
        const res = await fetch(CLOUD_URL, {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const { secure_url } = await res.json();
            return secure_url;
        } else {
            throw await res.json();
        }
    } catch (err) {
        throw err;
    }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };
