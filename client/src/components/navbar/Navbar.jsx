import "./navbar.css";
import React from "react";
import { GoGoal } from "react-icons/go";
import { useSelector } from "react-redux";
import { MdFastfood } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosFitness, IoIosBody } from "react-icons/io";

function Navbar() {
  const user = useSelector((state) => state.userState.user);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <IoIosFitness />
        </Link>
      </div>

      <div className="navbar__links">
        <NavLink to="/food" className="navbar__link food">
          <MdFastfood />
        </NavLink>
        <NavLink to="/goal" className="navbar__link goal">
          <GoGoal />
        </NavLink>
        <NavLink to="/exercise" className="navbar__link exercise">
          <IoIosBody />
        </NavLink>
        <NavLink to="/user" className="navbar__link">
          <img
            src={
              user.profilePictureUrl
                ? user.profilePictureUrl
                : "https://toppng.com/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
            }
            alt={user.username}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
