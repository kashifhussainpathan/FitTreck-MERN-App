import "./user.css";
import { useSelector } from "react-redux";
import Login from "../../components/login/Login";
import Singup from "../../components/signup/Signup";
import UserCard from "../../components/userCard/UserCard";
import { useState } from "react";

function User() {
  const user = useSelector((state) => state.userState.user);
  const isLoginError = useSelector((state) => state.userState.loginError);
  const [isAlreadyHaveAnAccount, setIsAlreadyHaveAnAccount] = useState(false);

  return (
    <div>
      {Object.keys(user).length <= 0 ? (
        <div className="auth">
          {isAlreadyHaveAnAccount ? (
            <>
              <p style={{ color: "red" }}>
                {isLoginError !== "" ? isLoginError : ""}
              </p>
              <Login />

              <p onClick={() => setIsAlreadyHaveAnAccount(false)}>
                Create new accont.
              </p>
            </>
          ) : (
            <>
              <Singup setIsAlreadyHaveAnAccount={setIsAlreadyHaveAnAccount} />

              <p onClick={() => setIsAlreadyHaveAnAccount(true)}>
                Already have an account.
              </p>
            </>
          )}
        </div>
      ) : (
        <UserCard user={user} />
      )}
    </div>
  );
}

export default User;
