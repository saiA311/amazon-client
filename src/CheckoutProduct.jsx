import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const CheckoutProduct = ({ id, title, source, rating, removeItem, price }) => {
  return (
    <div className="item">
      <img className="item__info-img" src={source} alt="" />
      <p id="title">{title}</p>
      <div className="item__info-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
      </div>
      <p className="item__info-price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <button
        className="item__remove-btn"
        id={id}
        onClick={(e) => removeItem(e)}
      >
        <DeleteIcon className="item__remove-btn-icon" />
      </button>
    </div>
  );
};

export default CheckoutProduct;
