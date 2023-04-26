import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo"></img>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Favorite</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
}
