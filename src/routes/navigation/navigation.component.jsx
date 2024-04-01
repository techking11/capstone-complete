import { Fragment } from "react";
import "./navigation.style.scss";

import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/007 crown.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={CrwnLogo} alt="Crown Clothing" className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/auth'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;