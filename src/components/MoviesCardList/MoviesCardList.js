import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MainApi from "../../utils/MainApi";
import "./MoviesCardList.css";
import MoreButton from "../MoreButton/MoreButton";
import {
  SCREENWIDTH_1280,
  SCREENWIDTH_768,
  NUMBEROFCELLS_1280,
  NUMBEROFCELLS_600,
  NUMBEROFCELLS_768,
  NUMBEROFCELLSINAROW_1280,
  NUMBEROFCELLSINAROW_768,
} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  searchMovies = [],
  savedMovies = [],
  setHandleAddMovies,
}) {
  const [size, setSize] = useState(window.innerWidth);
  const [moviesCounter, setMoviesCounter] = useState();
  const [more, setMore] = useState();
  const [load, setLoad] = useState(false);

  function checkSaveMovie() {
    let array = [];
    MainApi.getSavedMovies()
      .then((data) => {
        array = data.data;
        localStorage.setItem("savedMovies", JSON.stringify(array));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    checkSaveMovie();
  }, []);

  useEffect(() => {
    setLoad(true);
  });

  useEffect(() => {
    const handleChangeWidth = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleChangeWidth);
    if (size > SCREENWIDTH_1280) {
      setMoviesCounter(NUMBEROFCELLS_1280);
      setMore(NUMBEROFCELLSINAROW_1280);
    } else if (size > SCREENWIDTH_768) {
      setMoviesCounter(NUMBEROFCELLS_768);
      setMore(NUMBEROFCELLSINAROW_768);
    } else {
      setMoviesCounter(NUMBEROFCELLS_600);
      setMore(NUMBEROFCELLSINAROW_768);
    }
    return () => window.removeEventListener("resize", handleChangeWidth);
  }, [size]);

  const handleDelete = (movie) => {
    console.log(movie._id);
    MainApi.deleteMovie(movie._id || movie.movieId)
      .then((data) => {
        console.log(data);
        const newArray = JSON.parse(localStorage.getItem("savedMovies")).filter(
          (e) => e._id !== data._id
        );
        localStorage.setItem("savedMovies", JSON.stringify(newArray));
        setHandleAddMovies(newArray);
        setHandleAddMovies(JSON.parse(localStorage.getItem("searchedMovies")));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="movie-list">
        <ul className="movie-list__elements">
          {load ? (
            searchMovies.slice(0, moviesCounter).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  movie={movie}
                  nameRU={movie.nameRU}
                  image={movie.image}
                  trailerLink={movie.trailerLink}
                  duration={movie.duration}
                  handleDelete={handleDelete}
                />
              );
            })
          ) : (
            <Preloader />
          )}
        </ul>
      </section>
      {searchMovies.length > moviesCounter ? (
        <MoreButton onClick={() => setMoviesCounter(moviesCounter + more)} />
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
