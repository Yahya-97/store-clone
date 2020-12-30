import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={2}
          />
          <Product
            id="49538094"
            title="Book for learn Arduino"
            price={10.99}
            image="https://m.media-amazon.com/images/I/514Ixu8P39L._SY346_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Book for learn javascript"
            price={8.99}
            image="https://eloquentjavascript.net/img/cover.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Book for learn Html&Css"
            price={4.99}
            image="https://media.wiley.com/product_data/coverImage300/42/11188716/1118871642.jpg"
            rating={3}
          />
          <Product
            id="3254354345"
            title="Book for learn Python"
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41hGo6CTPqL._SX342_QL70_ML2_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="PS5 Digital Edition"
            price={499.99}
            image="https://arabhardware.net/wp-content/uploads/2020/06/EaQrN8zWAAAkmvG.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
