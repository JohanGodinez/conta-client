import { Button, Input } from "../components";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-textPrimary p-4">
      <div className="bg-secondary rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Usuario
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Ingrese su usuario"
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
              placeholder="Ingrese su contraseña"
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
