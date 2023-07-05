import React, { useState } from "react";
import './navbar.scss';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleProgramaLlamadaClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="width bg_navbar">
      <nav className="navigation">
        <a href="/" className="brand-name">
          MacroSoft
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/about">Sobre nosotros</a>
            </li>
            <li>
              <a href="/services">Servicios</a>
            </li>
            <li>
              <button className="cssbuttons-io-button" onClick={handleProgramaLlamadaClick}>
                Programa una llamada
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
