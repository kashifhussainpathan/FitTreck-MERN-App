import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({ children }) {
  const location = useLocation();
  const user = useSelector((state) => state.userState.user);

  return Object.keys(user).length > 0 ? (
    children
  ) : (
    <Navigate to="/user" state={{ from: location }} />
  );
}

export default RequiresAuth;
