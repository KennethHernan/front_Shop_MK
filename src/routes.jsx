import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loading from "./Components/Loanding";

export const ProtectedRouteUser = () => {
  const { isAuthenticated, loading, userOriginal, isSession } = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  if (userOriginal?.rol === 0) return <Outlet />;

  return <Navigate to="/admin" replace />;
};

export const ProtectedRouteAdmin = () => {
  const {isAuthenticated, loading, userOriginal} = useAuth();

  if (loading) return <Loading />;
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;

  if (userOriginal?.rol === 1) return <Outlet />;
  
  return <Navigate to="/" replace />;
};
