import NavigationFilms from "./NavigationFilms/NavigationFilms";
import NavigationMain from "./NavigationMain/NavigationMain";
import "./Navigation.css";

function Navigation() {
  return (
    <section className="nav">
      {!localStorage.getItem("jwt") ? <NavigationMain /> : <NavigationFilms />}
    </section>
  );
}

export default Navigation;

//https://metanit.com/web/react/4.3.php
