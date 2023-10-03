import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({ children }) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/user" state={{ from: location }} />
  );
}

export default RequiresAuth;
