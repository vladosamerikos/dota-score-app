import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Cambia esto por la URL de tu backend

const backend = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email, password) => {
  try {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const response = await backend.post("/auth/login", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { access, refresh, nickname } = response.data;
    console.log(access);
    console.log(nickname);

    // Almacenar la información en variables de sesión
    sessionStorage.setItem("accessToken", access);
    sessionStorage.setItem("refreshToken", refresh);
    sessionStorage.setItem("nickname", nickname);
    sessionStorage.setItem("email", email);


    // Redireccionar a otra página
    // window.location.href = "/dashboard"; // Cambia la ruta a la página de destino

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password, nickname) => {
  try {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("nickname", nickname);

    const response = await backend.post("/auth/register", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);

    // Realizar auto login después del registro
    // if (response.data.success) {
    //   await login(email, password);
    // }

    return response.data;
  } catch (error) {
    throw error;
  }
};
