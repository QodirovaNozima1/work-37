import React from 'react'
import "./Hero.scss"

export const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__box">
                <p className='hero__root'><span>🌱 </span></p>
                <h2>The nature candle</h2>
                <p className='hero__text'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                <button className='hero__btn'>Discovery our collection</button>
            </div>
        </div>
    </div>
  )
}
export default Hero
