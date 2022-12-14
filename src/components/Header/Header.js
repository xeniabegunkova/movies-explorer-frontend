import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className={"header " + (props.loggedIn ? 'header_pink' : '')}>
            <Link to="/" className="header__link">
                <img
                    src={logo}
                    alt="Logo of diploma"
                    className="header__logo"
                />
            </Link>
            <Navigation loggedIn={props.loggedIn} />
        </header>
    )
}

export default Header;