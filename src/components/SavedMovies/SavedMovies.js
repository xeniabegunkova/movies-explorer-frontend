import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import { moviesConstants } from "../../utils/movieConstants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList moviesConstants={ moviesConstants } />
            <MoreButton />
        </>
    )
}

export default SavedMovies;