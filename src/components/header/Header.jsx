import React,{useState}from 'react';
import "./Header.scss";
import photo from "../../assets/logo.svg"
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [ isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    const links = ["About", "Contact us"]
  return (
    <header className="header">
    <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src={photo} alt="" />
                </div>
                <div className={`sidebar ${isMenuOpen ? "show" : ""}`}>
                <ul className="navbar__collection">
                    <select className="navbar__select" name="travel" id="travel">
                    <option value="travel"><span>Discovery</span></option>
                    <option value="travel"><span>About</span></option>
                    <option value="travel"><span>Contact</span></option>
                    <option value="travel"><span>Log in</span></option>      
                    </select>
                    {
                        links.map((el,i) =>(<li className='navbar__item'><a key={i} href="#"><span>{el}</span></a></li>))
                    }
                </ul>
                </div>
                <div className="navbar__icon">
                <FaRegUser />
                <GrCart />
                </div>

                <div onClick={toggleMenu} className="navbar__menu">
                <IoMenu />
                </div>
            </nav>
            </div>
        </header>
  )
}

export default Header