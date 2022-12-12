import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import { moviesSaveConstants } from '../../utils/movieConstants';
import Footer from '../Footer/Footer';

function SavedMovies() {
        return (
            <>
                <Header />
                <SearchForm />
                <MoviesCardList moviesConstants={moviesSaveConstants} />
                <MoreButton />
                <Footer />
            </>
        )
    }

export default SavedMovies;