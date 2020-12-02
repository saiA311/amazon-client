import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase.js";

function Header() {
  const [{ basket, user }] = useStateValue();
  const HandelAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="header__utility">
        <Link to="/">
          <img
            className="header__logo"
            src="https://images-na.ssl-images-amazon.com/images/G/01/magicarp/image/amazon-logo-white.svg"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input className="header__search-input" type="text" />
          <SearchIcon className="header__search-icon" />
        </div>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={HandelAuthentication} className="header__nav-options">
            <span className="header__nav-options-lineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__nav-options-lineTwo">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <div className="header__nav-options">
          <span className="header__nav-options-lineOne">Returns</span>
          <span className="header__nav-options-lineTwo">{"& "}Orders</span>
        </div>
        <div className="header__nav-options">
          <span className="header__nav-options-lineOne">Your</span>
          <span className="header__nav-options-lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__nav-options header__nav-optionsBasket">
            <ShoppingBasketIcon />
            <span className="header__nav-option-lineTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
