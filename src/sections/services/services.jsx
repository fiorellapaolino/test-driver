import React from 'react'
import './services.scss'
import Car from '../../assets/car.png'
import Tools from '../../assets/tools-color.png'

const Services = (props) => {
  return (
    <div className="services">
      <div className="about-us-section">
        <hr></hr>
        <h4>services</h4>
        <hr></hr>
      </div>
      <div className="services-section">
        <div className="services-container">
          {/* <Card details={CardData} /> */}
          <div className="cards-position">
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div style={{ width: '100%' }}>
                <p className="card-title">Estado de la carrocería </p>
                <p className="card-description">Evaluamos minuciosamente la carrocería de tu auto en busca de daños, corrosión o abolladuras, brindándote un informe detallado sobre su estado general y recomendaciones de mantenimiento.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div style={{ width: '100%' }}>
              <p className="card-title">Estado y funcionamiento de las piezas exteriores</p>
                <p className="card-description">Nuestros técnicos revisan faros, espejos, limpiaparabrisas y cerraduras, asegurándose de que estén en buen estado y funcionando correctamente, proporcionándote recomendaciones específicas en caso de algún problema.</p>
              </div>
            </div>
          </div>
          <figure>
            <img src={Car} alt="tools" />
          </figure>
          <div className="cards-position">
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div style={{ width: '100%' }}>
              <p className="card-title">Estado de los amortiguadores</p>
                <p className="card-description">Examinamos tus amortiguadores, realizando pruebas de compresión y rebote para evaluar su estado y rendimiento, proporcionándote recomendaciones para su mantenimiento o reemplazo si es necesario.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div style={{ width: '100%' }}>
              <p className="card-title">Estado de discos y pastillas de freno</p>
                <p className="card-description">Inspeccionamos los discos y pastillas de freno en busca de desgaste excesivo o daños, brindándote un informe detallado y recomendaciones específicas para su mantenimiento o reemplazo, garantizando la seguridad en tu sistema de frenos.</p>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services