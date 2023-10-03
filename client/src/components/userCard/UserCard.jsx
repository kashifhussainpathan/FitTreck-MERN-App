import "./userCard.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/user.actions";

function UserCard({ user }) {
  const dispatch = useDispatch();
  const { username, profilePictureUrl, email, phoneNumber } = user;

  const handleLogout = () => {
    const emptyUser = {};
    dispatch(setUser(emptyUser));
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  };

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
        <div onClick={handleLogout}>Logout </div>
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
