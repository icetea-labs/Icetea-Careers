import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  return !!user;
};

function PrivateRoute({ children }: any) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
