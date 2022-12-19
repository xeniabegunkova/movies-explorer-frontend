import NavigationFilms from "./NavigationFilms/NavigationFilms";
import NavigationMain from "./NavigationMain/NavigationMain";
import './Navigation.css'

function Navigation(props) {
    return (
        <section className="nav">
            {props.loggedIn ? <NavigationMain /> : <NavigationFilms />}
        </section>
    )
}

export default Navigation;

//https://metanit.com/web/react/4.3.php