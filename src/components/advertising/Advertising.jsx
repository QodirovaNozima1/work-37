import React from 'react'
import "./Advertising.scss"
import photo from "../../assets/Group.svg"
import image from "../../assets/image.png"

const Advertising = () => {
  return (
    <div className="advertising">
    <div className="container">
            <div className="advertising__box">
                <div className="advertising__desc">
                    <h2>Clean and fragrant soy wax</h2>
                    <p className='green'>Made for your home and for your wellness</p>
                    <div className="picks">
                        <img src={photo} alt="" />
                        <div className="advertising__content">
                        <b>Eco-sustainable:</b><p>All recyclable materials, 0% CO2 emissions</p>
                        </div>
                    </div>
                    <div className="picks">
                        <img src={photo} alt="" />
                        <div className="advertising__content">
                        <b>Eco-sustainable:</b><p>All recyclable materials, 0% CO2 emissions</p>
                        </div>
                    </div>
                    <div className="picks">
                        <img src={photo} alt="" />
                        <div className="advertising__content">
                        <b>Eco-sustainable:</b><p>All recyclable materials, 0% CO2 emissions</p>
                        </div>
                    </div>
                    <div className="picks">
                        <img src={photo} alt="" />
                        <div className="advertising__content">
                        <b>Eco-sustainable:</b><p>All recyclable materials, 0% CO2 emissions</p>
                        </div>
                    </div>
                    <button className='advertising__btn'>Learn more</button>
                </div>
                <div className="advertising__img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertising