import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Header from "../Header/Header";

function Main(loggedIn) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </>
    );
}

export default Main