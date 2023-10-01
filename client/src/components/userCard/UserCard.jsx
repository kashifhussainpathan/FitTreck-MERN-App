import "./userCard.css";
import React from "react";
import { TbUserEdit } from "react-icons/tb";

function UserCard({ user }) {
  const { username, profilePictureUrl, email, phoneNumber } = user;

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
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
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
}

export default UserCard;
