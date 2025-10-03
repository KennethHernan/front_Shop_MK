import { createContext, useContext } from "react";

let AuthContext = null;

export const getAuthContext = () => {
  if (!AuthContext) {
    AuthContext = createContext();
  }
  return AuthContext;
};

// Hook para consumir el contexto
export const useAuth = () => {
  const context = useContext(getAuthContext());
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};
