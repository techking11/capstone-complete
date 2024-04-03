import { useContext } from "react";
import "./navigation.style.scss";

import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/007 crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import toast from "react-hot-toast";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutAuth = async () => {
    await signOutUser();
    setCurrentUser(null);
    toast.success('Successfully signed out !');
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={CrwnLogo} alt="Crown Clothing" className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutAuth}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />

        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;