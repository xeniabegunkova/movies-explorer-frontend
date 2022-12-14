import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Header from "../Header/Header";

function Main(loggedIn) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
        </>
    );
}

export default Main
