import { useState } from "react";
import './intro.scss'
import '../../sections/navbar/navbar.scss';
import bgHomePage from '../../assets/Background.png';

const Intro = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="intro">
        <img src={bgHomePage} alt="bg" className="bg-home-page" />
      <div className="width bg_navbar">
        <nav className="navigation">
          <a href="/" className="brand-name">
            TestDriver
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <a href="/home">Sobre nosotros</a>
              </li>
              <li>
                <a href="/about">Servicios</a>
              </li>
              <li>
                {/* <a href="/contact">Programa una llamada</a> */}
                <button className="cssbuttons-io-button">
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
  )
}

export default Intro