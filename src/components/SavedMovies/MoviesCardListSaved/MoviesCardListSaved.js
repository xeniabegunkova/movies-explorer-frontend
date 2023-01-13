import { useEffect, useState } from "react";
import MoviesCard from "../../MoviesCard/MoviesCard";
import MainApi from "../../../utils/MainApi";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

function MoviesCardListSaved({ savedMovies = [], setHandleAddMovies }) {
  const [error, setError] = useState("");
  const location = useLocation();
  const [load, setLoad] = useState(false);

  function saveMovie() {
    if (location.pathname === "/saved-movies") {
      MainApi.getSavedMovies(localStorage.getItem("jwt"))
        .then((data) => {
          let savedMoviesArray = data.data;
          console.log(savedMoviesArray);
          localStorage.setItem("savedMovies", JSON.stringify(savedMoviesArray));
          setHandleAddMovies(JSON.parse(localStorage.getItem("savedMovies")));
          //savedMoviesArray.length === 0 && setError("Ничего не найдено");
          setLoad(true);
        })
        .catch((err) => {
          setError("Во время запроса произошла ошибка");
          console.log(err);
        });
    }
  }

  useEffect(() => {
    saveMovie();
  }, [location.pathname]);

  const handleDelete = (movie) => {
    MainApi.deleteMovie(movie._id, localStorage.getItem('jwt'))
      .then((data) => {
        const newArray = savedMovies.filter((e) => e._id !== data._id);
        console.log(newArray)
        localStorage.setItem("savedMovies", JSON.stringify(newArray));
        setHandleAddMovies(newArray);
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
            savedMovies
              .map((movie) => {
                return (
                  <MoviesCard
                    key={movie._id}
                    id={movie.id}
                    movie={movie}
                    nameRU={movie.nameRU}
                    image={movie.image}
                    trailerLink={movie.trailerLink}
                    duration={movie.duration}
                    error={error}
                    handleDelete={handleDelete}
                  />
                );
              })
              .reverse()
          ) : (
            <Preloader />
          )}
        </ul>
      </section>
    </>
  );
}

export default MoviesCardListSaved;
