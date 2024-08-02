import React from "react";
import "./Client.scss";
import { IoStar,IoStarHalf } from "react-icons/io5";
import acc  from "../../assets/bg.png"
import acc2 from "../../assets/img.png"

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <h2>Testimonials</h2>
        <h3>Some quotes from our happy customers</h3>
        <div className="client__wrapper">
          <div className="client__card">
            <img src={acc} alt="" />
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStarHalf className="star" />
            </div>
            <b>“I love it! No more air fresheners”</b>
            <p>Luisa</p>
          </div>
          <div className="client__card">
            <img src={acc2} alt="" />
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStarHalf className="star" />
            </div>
            <b>“I love it! No more air fresheners”</b>
            <p>Edoardo</p>
          </div>
          <div className="client__card">
            <img src={acc} alt="" />
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStarHalf className="star" />
            </div>
            <b>“I love it! No more air fresheners”</b>
            <p>Mart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client;
