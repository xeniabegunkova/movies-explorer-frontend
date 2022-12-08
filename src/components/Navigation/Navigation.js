import NavigationFilms from "./NavigationFilms/NavigationFilms";
import NavigationMain from "./NavigationMain/NavigationMain";

function Navigation(props) {
    return (
        <>
            {props.loggedIn ? <NavigationMain /> : <NavigationFilms />}
        </>
    )
}

export default Navigation;

//https://metanit.com/web/react/4.3.php