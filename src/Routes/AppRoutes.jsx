import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRouteAdmin } from "../routes";

import HomePage from "../Page/HomePage";
import PoliticaPrivacidad from "../Page/PoliticaPrivacidad";
import Nosotros from "../Page/Nosotros";
import Checkout from "../Page/Checkouts";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Rutas del usuario -- checkouts */}
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-y-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/sobre-nosotros" element={<Nosotros />} />
        <Route path="/checkout/Ab93xYt20FpQfD9xQa23LmZp" element={<Checkout />} />


        <Route element={<ProtectedRouteAdmin />}>
          {/* Rutas del administrador */}
          {/* <Route path="/admin" element={<AdminHome />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
