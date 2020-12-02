import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const BasketItem = () => {
  const [{ basket }, dispatch] = useStateValue();
  const removeBasketItem = (e) => {
    dispatch({ type: "REMOVE_FROM_BASKET", item: { id: e.target.id } });
  };
  const Basketitems = basket.map((item) => (
    <CheckoutProduct
      key={item.date}
      id={item.id}
      source={item.source}
      title={item.title}
      rating={item.rating}
      price={item.price}
      removeItem={removeBasketItem}
    />
  ));
  return <div className="basketitems">{Basketitems}</div>;
};

export default BasketItem;
