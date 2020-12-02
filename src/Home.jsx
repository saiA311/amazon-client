import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home_row1">
          <Product
            id="101"
            key="101"
            source="data:image/webp;base64,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"
            title="learn startup"
            price={7.5}
            rating={3}
          />
          <Product
            id="102"
            key="102"
            source="https://images-na.ssl-images-amazon.com/images/I/810cLcD4xFL._SY450_.jpg"
            title="radio"
            price={13.7}
            rating={4}
          />
          <Product
            id="103"
            key="103"
            source="data:image/webp;base64,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"
            title="earphone"
            price={16.8}
            rating={3}
          />
        </div>
        <div className="home_row2">
          <div className="block">
            <Product
              id="104"
              key="104"
              source="https://images-na.ssl-images-amazon.com/images/I/71WdrLib1GL._SL1500_.jpg"
              title="samsung fridge"
              price={28}
              rating={3}
            />
            <Product
              id="105"
              key="105"
              source="https://images-na.ssl-images-amazon.com/images/I/719bZfZZ3aL._SL1500_.jpg"
              title="washing machine"
              price={13}
              rating={4}
            />
            <Product
              id="106"
              key="106"
              source="https://images-na.ssl-images-amazon.com/images/I/71uZrDPrsRL._SL1500_.jpg"
              title="samsung M30"
              price={17}
              rating={3}
            />
            <Product
              id="107"
              key="107"
              source="https://images-na.ssl-images-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
              title="boat wireless headphone"
              price={18.65}
              rating={3}
            />
          </div>
          <div className="block">
            <Product
              id="108"
              key="108"
              source="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
              title="Moniter"
              price={25}
              rating={4}
            />
            <Product
              id="109"
              key="109"
              source="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
              title="hp laptop"
              price={251}
              rating={2}
            />
            <Product
              id="110"
              key="110"
              source="https://images-na.ssl-images-amazon.com/images/I/914qA39mK6L._SL1500_.jpg"
              title="samsung 1tb harddrive"
              price={20}
              rating={3}
            />
            <Product
              id="111"
              key="111"
              source="https://images-na.ssl-images-amazon.com/images/I/71xcmneHr-L._SL1500_.jpg"
              title="hp laser printer"
              price={13}
              rating={3}
            />
          </div>
        </div>
        <br />
        <div className="home_row3">
          <div className="home_slider">
            <Product
              id="112"
              key="112"
              source="https://images-na.ssl-images-amazon.com/images/I/71KVQa4N4zL._SL1500_.jpg"
              title="LG OLED flat tv"
              price={137}
              rating={4}
            />
            <Product
              id="113"
              key="113"
              source="https://images-na.ssl-images-amazon.com/images/I/81lDF673d9L._SL1500_.jpg"
              title="vivo"
              price={260}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
