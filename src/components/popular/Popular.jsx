import React from 'react'
import "./Popular.scss"
import photo1 from "../../assets/image 1.png"
import photo2 from "../../assets/image 2.png"
import photo3 from "../../assets/image 3.png"
import photo4 from "../../assets/image 4.png"


const Popular = () => {
    const product = [
        {
            id: 1,
            url: photo1,
            title: "Spiced Mint",
            price: 9.99
        },
        {
            id: 2,
            url: photo2,
            title: "Sweet Straweberry",
            price: 9.99
        },
        {
            id: 3,
            url:photo3,
            title: "Cool Blueberries",
            price: 9.99
        },
        {
            id: 4,
            url:photo4,
            title: "Juicy Lemon",
            price: 9.99
        },
    ]
  return (
    <div className="popular">
        <div className="container">
              <div className="product__title">
                <h2>Popular</h2>
                <p>
                Our top selling product that you may like
                </p>
            </div>
            <div className="product__wrapper">
            {
                    product?.map((el) => (
                        <div key={el.id} className="product__card">
                            <div className="product__img">
                                <img src={el.url} alt="" />
                            </div>
                            <div className="product__desc">
                                <p className="product__name">{el.title}</p>
                                <p className="product__price">{el.price}$</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Popular