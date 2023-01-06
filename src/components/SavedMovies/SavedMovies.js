import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCardListSaved from "./MoviesCardListSaved/MoviesCardListSaved";

function SavedMovies({ handleDelete }) {

    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardListSaved handleDelete={handleDelete} />
            <div className="saved-movies"></div>
            <Footer />
        </>
    )
}

export default SavedMovies;