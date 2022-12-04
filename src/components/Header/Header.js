import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css'; 
import logo from '../../images/logo.svg';

function Header(props) {
    return (
        <header className={ "header " + (props.loggedIn ? 'header__pink' : '')}>
            <img
                src={logo}
                alt="Logo of diploma"
                className="header__logo"
            />
            <Navigation loggedIn={props.loggedIn}/>
        </header>
    )
}

export default Header;