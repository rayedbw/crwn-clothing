import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
