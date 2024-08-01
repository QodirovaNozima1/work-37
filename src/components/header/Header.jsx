import React from 'react';
import "./Header.scss";
import photo from "../../assets/logo.svg"
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    const links = ["About", "Contact us"]
  return (
    <div className="container">
        <header className='header'>
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src={photo} alt="" />
                </div>
                <ul className="navbar__collection">
                    <select className="navbar__select" name="travel" id="travel">
                    <option value="travel">Discovery</option>
                    <option value="travel">About</option>
                    <option value="travel">Contact</option>
                    <option value="travel">Log in</option>      
                    </select>
                    {
                        links.map((el,i) =>(<li className='navbar__item'><a key={i} href="#"><span>{el}</span></a></li>))
                    }
                </ul>
                <div className="navbar__icon">
                <FaRegUser />
                <IoCartOutline />
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header