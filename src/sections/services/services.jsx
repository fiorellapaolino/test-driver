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
              <div>
                <p className="card-title"> {props.title}</p>
                <p className="description"> {props.description}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div>
              <p className="card-title"> {props.title}</p>
                <p className="description"> {props.description}</p>
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
              <div>
              <p className="card-title"> {props.title}</p>
                <p className="description"> {props.description}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={Tools} alt="tools" />
              </div>
              <div>
              <p className="card-title"> {props.title}</p>
                <p className="description"> {props.description}</p>
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