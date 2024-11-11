import { FormEvent, useState } from "react";
import { Button, Input } from "../components";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    navigate('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-textSecondary p-4">
      <div className="bg-secondary rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={hanldeSubmit}>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="text"
              placeholder="usuario@correo.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="pt-4">
            <Button type="submit">Iniciar Sesión</Button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-300 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
