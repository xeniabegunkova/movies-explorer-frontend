import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import './Movies.css';
import { useState } from "react";

function Movies({ handleDelete }) {
    
    const alreadySearchedMovies = JSON.parse(localStorage.getItem('searchedMovies')) || [];

    const [searchMovies, setSearchMovies] = useState(alreadySearchedMovies);

    return (
        <>
            <Header />
            <SearchForm
                setHandleAddMovies={setSearchMovies} />
            <MoviesCardList
                searchMovies={searchMovies}
                handleDelete={handleDelete}
                setHandleAddMovies={setSearchMovies} />
            <Footer />
        </>
    )
}

export default Movies;