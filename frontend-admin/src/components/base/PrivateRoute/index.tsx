import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: any) {
  const auth = false;
  // const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
