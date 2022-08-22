import React from 'react'
import './about-us.scss'
import man from '../../assets/man.jpeg';

const AboutUs = () => {
  return (
    <div className="about">
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
            You will be amazed if you take part in this sailing
            Komodo island tour package. So it is also mandatory for you,
            besides enjoying Komodo tourism on Komodo Island,
            you also have to taste the marine tourism.
            The beautiful waters of Komodo will make you meet
            many travelers from other countries.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs