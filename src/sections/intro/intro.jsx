import { useState } from "react";
import "./intro.scss";
import "../../sections/navbar/navbar.scss";
import bgHomePage from "../../assets/Background.png";
import hamburgerIcon from "../../assets/hamburguer.png";

const Intro = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleProgramaLlamadaClick = () => {
    window.location.href = "#contact";
  };

  return (
    <div className="intro" id="home">
      <img src={bgHomePage} alt="bg" className="bg-home-page" />
      <div className="width bg_navbar">
        <nav className="navigation">
          <a href="#home" className="brand-name">
            TestDriver
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
          </button>
          <img src={hamburgerIcon} alt="Hamburger" style={{width: '25px', height: '25px'}}/>

          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <a href="#about">Sobre nosotros</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <button
                  className="cssbuttons-io-button"
                  onClick={handleProgramaLlamadaClick}
                >
                  Programa una llamada
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="hero">
        <h1>Compra tu vehículo con el informe de un experto</h1>
        <p>Test vehiculares para particulares y empresas</p>
      </div>
    </div>
  );
};

export default Intro;
