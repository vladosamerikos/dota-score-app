import React, { useState } from "react";
import axios from "axios";

export default function AuthForm(props) {
  const [authMode, setAuthMode] = useState("signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      if (authMode === "signin") {
        form.append("email", formData.email);
        form.append("password", formData.password);

        const response = await axios.post("http://localhost:8000/auth/login", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Manejar la respuesta del servidor
        const { access, refresh, nickname } = response.data;
        console.log(access);
        console.log(nickname);

        // Almacenar el token de acceso en el almacenamiento local
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        // Redireccionar a otra página o realizar otras acciones
        // por ejemplo: props.history.push("/dashboard");
      } else {
        form.append("email", formData.email);
        form.append("password", formData.password);
        form.append("nickname", formData.nickname);

        const response = await axios.post("http://localhost:8000/auth/register", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Manejar la respuesta del servidor
        console.log(response.data);
      }
    } catch (error) {
      // Manejar errores de solicitud
      console.error(error);
    }
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submitForm}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar sesión</h3>
            <div className="text-center">
              Todavía no estás registrado?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Crear cuenta
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitForm}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrarse</h3>
          <div className="text-center">
            ¿Ya registrado?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Iniciar sesión
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nickname</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g jake"
              value={formData.nickname}
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
