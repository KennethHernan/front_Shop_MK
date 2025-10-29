import { Route, Routes } from "react-router-dom";
import { ProtectedRouteAdmin } from "../routes";

import HomePage from "../Page/HomePage";
import PoliticaPrivacidad from "../Page/PoliticaPrivacidad";
import Nosotros from "../Page/Nosotros";
import Checkout from "../Page/Checkouts";
import Login from "../Page/Login";
import HomeProduct from "../Page/HomeProduct";
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta pública */}

      {/* Rutas del usuario */}
      <Route path="/" element={<HomePage />} />
      <Route path="/log-in" element={<Login />} />
      <Route path="/politica-y-privacidad" element={<PoliticaPrivacidad />} />
      <Route path="/sobre-nosotros" element={<Nosotros />} />
      <Route path="/checkout/:session/:variable" element={<Checkout />} />
      <Route
        path="/categoria-producto/:idCategoria"
        element={<HomeProduct />}
      />

      <Route element={<ProtectedRouteAdmin />}>
        {/* Rutas del administrador */}
        {/* <Route path="/admin" element={<AdminHome />} /> */}
      </Route>
    </Routes>
  );
};
