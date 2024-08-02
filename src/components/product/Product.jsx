import React from 'react'
import "./Product.scss"
import photo1 from "../../assets/image 1.png"
import photo2 from "../../assets/image 2.png"
import photo3 from "../../assets/image 3.png"
import photo4 from "../../assets/image 4.png"

const data=[
    {
        id:1,
        url:photo1,
        title:"Spiced Mint",
        price:9.99
    },
    {
        id:2,
        url:photo2,
        title:"Sweet Straweberry",
        price:9.99
    },
    {
        id:3,
        url:photo3,
        title:"Cool Blueberries",
        price:9.99
    },
    {
        id:4,
        url:photo2,
        title:"Juicy Lemon",
        price:9.99
    },
    {
        id:5,
        url:photo4,
        title:"Product name",
        price:9.99
    },
    {
        id:6,
        url:photo3,
        title:"Fragrant Cinnamon",
        price:9.99
    },
    {
        id:7,
        url:photo2,
        title:"Summer Cherries",
        price:9.99
    },
    {
        id:8,
        url:photo1,
        title:"Clean Lavander",
        price:9.99
    }
]

const Product = () => {
  return (
    <div className="container">
        <div className="product">
            <div className="product__title">
                <h2>Products</h2>
                <p>Order it for you or for your beloved ones </p>
            </div>
            <div className="product__wrapper">
                {
                    data?.map((el) =>(
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

export default Product