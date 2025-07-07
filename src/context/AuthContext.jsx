import { useEffect } from "react";
import { useRef } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {


  return (
    <AuthContext.Provider
      value={{
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
