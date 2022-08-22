import React from 'react'
import "./topbar.scss"

const Topbar = () => {
    return (
        <div className="width bg">
            <div className="topbar">
                <div className="wrapper">
                    <div className="right">
                        <div className="location-widget">
                            <span className="material-icons md-18">pin_drop</span>
                            <p>Buenos Aires, Argentina.</p>
                        </div>
                        <div className="contact-widget">
                            <span className="material-icons md-18">schedule</span>

                            <p>Contactanos: de 8:00 a 22:00</p>
                        </div>
                    </div>
                    <div className="left">
                        <div className="phone">
                            <span className="material-icons md-18">phone_in_talk</span>
                            <p>+7 (708) 51 51 518</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar