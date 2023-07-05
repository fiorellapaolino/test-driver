import React from 'react'
import './about-us.scss'
import man from '../../assets/man.jpeg';

const AboutUs = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="left-about">
          <img src={man} alt="bg" className="man" />
        </div>
        <div className="right-about">
          <div className="right-about-container">
          <div className="about-us-section">
            <hr></hr>
            <h4>sobre nosotros</h4>
          </div>
          <h2>Nuestra mejor forma de trabajar</h2>
          <p>
          Contamos con un grupo de expertos altamente capacitados y apasionados por el mundo automotriz. Nos mantenemos actualizados en las últimas tecnologías y tendencias del sector para brindar servicios de alta calidad a nuestros clientes.
          <br />
          <br />
          En cada prueba técnica de automotores que realizamos, aplicamos un enfoque minucioso y detallado. Utilizamos herramientas y equipos de vanguardia para garantizar resultados precisos y confiables. Nuestro objetivo es identificar cualquier problema o falla en los vehículos y proporcionar recomendaciones claras y efectivas para su resolución.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs