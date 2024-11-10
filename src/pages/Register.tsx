import { Link } from "react-router-dom";
import { Button, Input } from "../components";

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-secondary rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Usuario
            </label>
            <Input
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Elija un nombre de usuario"
              required
            />
          </div>
          <div>
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre
            </label>
            <Input
              id="nombre"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block font-medium mb-1">
              Apellido
            </label>
            <Input
              id="apellido"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su apellido"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Elija una contraseña"
              required
            />
          </div>
          <div className="pt-4">
            <Button type="submit">Registrarse</Button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
