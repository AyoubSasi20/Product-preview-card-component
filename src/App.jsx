import React from "react";
import "./App.css";
import imgM from "./assets/images/image-product-mobile.jpg";
import imgD from "./assets/images/image-product-desktop.jpg";
import cart from "./assets/images/icon-cart.svg";

const App = () => {
  return (
    <>
      <div className="card">
        <picture className="perfum">
          <source media="(max-width: 767px)" srcSet={imgM} />
          <img src={imgD} alt="Gabrielle Essence Eau De Parfum" />
        </picture>
        <div className="content">
          <p className="category">PERFUME</p>
          <h1> Gabrielle Essence Eau De Parfum</h1>
          <p className="discription">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <p className="current-price">$149.99</p>
            <s>$169.99</s>
          </div>
          <div className="cart-btn">
            <button className="btn">
              <img src={cart} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AyoubSasi20">Ayoub</a>.
        </p>
      </div>
    </>
  );
};

export default App;
