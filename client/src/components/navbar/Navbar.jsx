import "./navbar.css";
import React from "react";
import { GoGoal } from "react-icons/go";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosFitness, IoIosBody } from "react-icons/io";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <IoIosFitness />
        </Link>
      </div>

      <div className="navbar__links">
        <NavLink to="/" className="navbar__link home">
          <AiFillHome />
        </NavLink>
        <NavLink to="/food" className="navbar__link food">
          <MdFastfood />
        </NavLink>
        <NavLink to="/goal" className="navbar__link goal">
          <GoGoal />
        </NavLink>
        <NavLink to="/exercise" className="navbar__link exercise">
          <IoIosBody />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
