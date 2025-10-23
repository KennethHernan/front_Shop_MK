
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loading from "./Components/Loanding";
import { useAuth } from "./context/authSingleton";

export const ProtectedRouteUser = () => {
  const { autentication, loading, userOriginal, isSession } = useAuth();

  if (loading) return <Loading />;
  if (!autentication && !loading) return <Navigate to="/login" replace />;

  if (userOriginal?.rol === 0) return <Outlet />;

  return <Navigate to="/admin" replace />;
};

export const ProtectedRouteAdmin = () => {
  const {autentication, loading, userOriginal} = useAuth();

  if (loading) return <Loading />;
  if (!autentication && !loading) return <Navigate to="/login" replace />;

  if (userOriginal?.rol === 1) return <Outlet />;
  
  return <Navigate to="/" replace />;
};
