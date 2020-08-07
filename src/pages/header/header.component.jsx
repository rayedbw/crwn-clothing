import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const toggleCart = useSelector(state => state.cart.hidden);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {toggleCart ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
