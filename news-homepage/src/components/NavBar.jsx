import React, { useState } from "react";
import "./NavBar.css";
import web3Logo from "../../src/assets/images/logo.svg";
import menuIcon from "../../src/assets/images/icon-menu.svg";
import closeIcon from "../../src/assets/images/icon-menu-close.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="web3-icon">
        <img src={web3Logo} alt="WEB3 Icon" />
      </div>

      {!menuOpen && (
        <div>
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu icon"
            onClick={() => setMenuOpen(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {menuOpen && (
        <nav>
          <img
            className="close-icon"
            src={closeIcon}
            alt="Menu close icon"
            onClick={() => setMenuOpen(false)}
          />
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      )}

      <nav className="nav-menu">
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}
