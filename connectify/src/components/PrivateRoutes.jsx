import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../main";
import { useContext } from "react";
const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(Context);
  return isAuthenticated ? <Outlet /> : <Navigate to="signup" />;
};

export default PrivateRoutes;
