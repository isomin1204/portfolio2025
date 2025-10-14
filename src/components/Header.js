import React from "react";

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Profile</a></li>
          <li><a href="#skills">Career</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
