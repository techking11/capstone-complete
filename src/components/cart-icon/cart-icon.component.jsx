import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/004 shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img src={ShoppingIcon} className="shopping-icon" alt="Shopping Icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon