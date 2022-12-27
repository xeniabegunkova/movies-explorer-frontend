import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesSaveConstants } from '../../utils/movieConstants';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies() {
        return (
            <>
                <Header />
                <SearchForm />
                <MoviesCardList />
                <div className="saved-movies"></div>
                <Footer />
            </>
        )
    }

export default SavedMovies;