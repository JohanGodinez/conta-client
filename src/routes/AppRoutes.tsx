import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../pages";

const AppRoutes = () => {
  return (
    <div className="dark bg-background text-textPrimary min-h-screen">
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas protegidas */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div className="h-screen flex items-center justify-center"><h1 className="text-6xl font-bold">404</h1></div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
