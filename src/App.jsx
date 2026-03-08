import React from "react";
import "./App.css";
import imgM from "./assets/images/image-product-mobile.jpg";
import imgD from "./assets/images/image-product-desktop.jpg";
import cart from "./assets/images/icon-cart.svg";

const App = () => {
  return (
    <>
      <article className="card">
        <picture className="perfum">
          <source media="(max-width: 767px)" srcSet={imgM} />
          <img src={imgD} alt="Gabrielle Essence Eau De Parfum" />
        </picture>
        <div className="content">
          <p className="category" aria-label="Product Category">
            PERFUME
          </p>
          <h1> Gabrielle Essence Eau De Parfum</h1>
          <p className="discription">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <p
              className="current-price"
              aria-label="Current price: 149 dollars and 99 cents"
            >
              $149.99
            </p>
            <del aria-label="Original price: 169 dollars and 99 cents">
              $169.99
            </del>
          </div>
          <div className="cart-btn">
            <button className="btn">
              <img src={cart} alt="cart icon" /> Add to Cart
            </button>
          </div>
        </div>
      </article>
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
