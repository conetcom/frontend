import axios from "axios"; //
import React, { useState } from "react";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://proyecto-github-yhpr.onrender.com/api/usuarios/login",
        { email, password },
        { withCredentials: true } // Esto ayuda si usas cookies para autenticación
      );

      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
      alert("Error en el login");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
