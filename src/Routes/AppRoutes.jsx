import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRouteAdmin } from "../routes";

import HomePage from "../Page/HomePage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

          {/* Rutas del usuario */}
          <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRouteAdmin />}>
          {/* Rutas del administrador */}
          {/* <Route path="/admin" element={<AdminHome />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};