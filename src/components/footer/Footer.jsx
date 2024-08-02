import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
        <hr/>
            <div className="footer__box">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <p>Your natural candle made for your home and for your wellness.</p>
                </div>
                <div className="footer__wrapper">
                    <ul className="footer__collection">
                        <li className='footer__item'><span>Discovery</span></li>
                        <li className='footer__item'><span>New season</span></li>
                        <li className='footer__item'><span>Most searched</span></li>
                        <li className='footer__item'><span>Most selled</span></li>
                    </ul>
                    <ul className="footer__collection second">
                        <li className='footer__item'><span>About</span></li>
                        <li className='footer__item'><span>Help</span></li>
                        <li className='footer__item'><span>Shipping</span></li>
                        <li className='footer__item'><span>Affiliate</span></li>
                    </ul>
                    <ul className="footer__collection third">
                        <li className='footer__item'><span>Info</span></li>
                        <li className='footer__item'><span>Contact us</span></li>
                        <li className='footer__item'><span>Privacy Policies</span></li>
                        <li className='footer__item'><span>Terms & Conditions</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer