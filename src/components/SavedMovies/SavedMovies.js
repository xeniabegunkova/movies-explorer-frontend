import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import MoviesCardListSaved from "./MoviesCardListSaved/MoviesCardListSaved";
import { useState } from "react";

function SavedMovies({ handleDelete }) {
  const alreadySavedMovies =
    JSON.parse(localStorage.getItem("savedMovies")) || [];

  const [savedMovies, setSavedMovies] = useState(alreadySavedMovies);
  //console.log(alreadySavedMovies)
  return (
    <>
      <Header />
      <SearchForm
        setHandleAddMovies={setSavedMovies}
        setSavedMovies={setSavedMovies}
      />
      <MoviesCardListSaved
        savedMovies={savedMovies}
        handleDelete={handleDelete}
        setHandleAddMovies={setSavedMovies}
      />
      <div className="saved-movies"></div>
      <Footer />
    </>
  );
}

export default SavedMovies;
