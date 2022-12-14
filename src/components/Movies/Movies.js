import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { moviesConstants } from "../../utils/movieConstants";
import Footer from "../Footer/Footer";
import './Movies.css';
import MoreButton from "../MoreButton/MoreButton";

function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList moviesConstants={moviesConstants} />
            <MoreButton />
            <Footer />
        </>
    )
}

export default Movies;

//<SearchForm />
//<MoviesCardList moviesConstants={moviesConstants} />
//<MoreButton />