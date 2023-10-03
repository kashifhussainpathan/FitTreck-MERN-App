import "./userCard.css";
import React from "react";

function UserCard({ user }) {
  const { username, profilePictureUrl, email, phoneNumber } = user;

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
        <div>
          <a
            href="https://github.com/kashifhussainpathan/FitTreck-MERN-App"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
