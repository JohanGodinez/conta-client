import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../pages";
import { ProtectedRouter } from "./ProtectedRouter";

const AppRoutes = () => {
  return (
    <div className="dark bg-background text-textPrimary min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center">
                <h1 className="text-6xl font-bold">404</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
