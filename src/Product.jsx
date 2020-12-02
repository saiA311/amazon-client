import React from "react";
import { useStateValue } from "./StateProvider";

const Product = ({ id, source, title, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        source: source,
        price: price,
        rating: rating,
        date: Date.now(),
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__info-title">{title}</p>
        <p className="product__info-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__info-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <img className="product__info-img" src={source} alt="" />
        <button className="product__info-btn" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Product;
