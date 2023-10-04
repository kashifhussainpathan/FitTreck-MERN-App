import "./userCard.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import UserLoader from "../loaders/UserLoader";
import { setUser } from "../../actions/user.actions";
import { useDispatch, useSelector } from "react-redux";

function UserCard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const isUserLoading = useSelector((state) => state.userState.isUserLoading);
  const { username, profilePictureUrl, email, phoneNumber } = user;

  const handleLogout = () => {
    const emptyUser = {};
    dispatch(setUser(emptyUser));
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  };

  if (isUserLoading) {
    return (
      <>
        <UserLoader />
      </>
    );
  }

  return (
    <div className="usercard">
      <img
        src={
          profilePictureUrl
            ? profilePictureUrl
            : "https://toppng.com/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
        }
        alt=""
        className=""
      />

      <div className="usercard__details">
        <h3>@{username}</h3>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <button onClick={handleLogout} className="logout">
          Logout{" "}
        </button>
        <div className="github">
          <a
            href="https://github.com/kashifhussainpathan/FitTreck-MERN-App"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
