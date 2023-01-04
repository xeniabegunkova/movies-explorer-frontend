import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className={props.loggedIn ? 'header header_pink' : 'header'}>
            <Link to="/" className="header__link">
                <img
                    src={logo}
                    alt="Logo of diploma"
                    className="header__logo"
                />
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;