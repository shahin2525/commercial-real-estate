import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>loading .....</p>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
