/* eslint-disable react/style-prop-object */
import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <hr></hr>
        <h4>contact</h4>
        <hr></hr>
      </div>
      <div className='contact-container'>
        <div className="contact-content">
          <h3>Programa una llamada de 30 minutos con nosotros, totalmente gratuita.</h3>
          <button className="cssbuttons-io-button">
            Ponte en contacto
          </button>
          <div className="calendly-inline-widget" data-url="https://calendly.com/fiorellapaolino"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact