export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  const sum = basket.reduce((a, item) => a + item.price, 0);
  return sum;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cannot find the item with id ${action.item.id} in the basket`
        );
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};
