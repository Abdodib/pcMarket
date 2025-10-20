import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import "../styles/navbar.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { RiMenuUnfold3Line } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <h1>
            PC <span>Market</span>
          </h1>
        </Link>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/home">
            <h2>Home</h2>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <h2>Product</h2>
          </Link>
        </li>
        <li>
          <Link to="/build">
            <h2>Build your PC</h2>
          </Link>
        </li>
        <li>
          <Link to="/support">
            <h2>Support</h2>
          </Link>
        </li>

        <div className="nav-icons">
          <li>
            <Link to="/account">
              <h3>
                <FaUser />
              </h3>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <h3>
                <FaShoppingCart />
              </h3>
            </Link>
          </li>
        </div>
      </ul>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <RiMenuUnfold3Line /> : <TfiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
