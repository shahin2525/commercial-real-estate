import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>loading .....</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
