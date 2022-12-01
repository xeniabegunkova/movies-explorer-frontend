import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css'; 
import logo from '../../images/logo.svg';

function Header(loggedIn) {
    
    return (
        <header className="header">
            <img
                src={logo}
                alt="Logo of diploma"
                className="header__logo"
            />
            <Navigation loggedIn={loggedIn}/>
        </header>
    )
}

export default Header;