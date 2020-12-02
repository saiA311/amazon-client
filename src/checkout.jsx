import React from "react";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://cdn-blog.cpcstrategy.com/wp-content/uploads/2015/10/amazon-vendor-guide-blog.jpg"
          alt=""
        />
        <div className="checkout__load">
          <h2 className="checkout__title">Your shopping Basket</h2>
          <BasketItem />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
