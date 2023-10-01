import "./user.css";
import { useSelector } from "react-redux";
import Login from "../../components/login/Login";
import Singup from "../../components/signup/Signup";
import UserCard from "../../components/userCard/UserCard";

function User() {
  const token = useSelector((state) => state.userState.token);
  const user = useSelector((state) => state?.userState?.user);

  return (
    <div className="user">
      {Object.keys(user).length <= 0 ? (
        <>{token ? <Login /> : <Singup />}</>
      ) : (
        <UserCard user={user} />
      )}
    </div>
  );
}

export default User;
