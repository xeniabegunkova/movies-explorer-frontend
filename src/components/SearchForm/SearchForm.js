import { useEffect, useState } from "react";
import "./SearchForm.css";
import { getMovieList } from "../../utils/MoviesApi";
import { TIMEOFTHESHORTFILMS } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function SearchForm({ setHandleAddMovies, setSavedMovies }) {
  const location = useLocation();

  const searchTextInitialValue = () => {
    if (location.pathname === "/movies") {
      return localStorage.getItem("searchText") || "";
    } else if (location.pathname === "/saved-movies") {
      return "";
    }
  };

  const [searchText, setSearchText] = useState(searchTextInitialValue);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState();
  const [isError, setIsError] = useState(false);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getMovieList()
      .then((response) => {
        if (response) {
          setMovies(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    if (JSON.parse(localStorage.getItem("shortMovies"))) {
      const searchFilms = JSON.parse(localStorage.getItem("searchedMovies")) || [];
      console.log(searchFilms)
      const filteredMovies = searchFilms.filter((movie) => {
        console.log(searchFilms)
        return movie.duration <= TIMEOFTHESHORTFILMS;
      });
      setHandleAddMovies(filteredMovies);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (searchText === "") {
      setError("Нужно ввести ключевое слово");
      setIsError(true);
    } else {
      if (location.pathname === "/movies") {
        localStorage.setItem("searchText", searchText);

        const filteredMovies = movies.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
        );

        const alreadySearchedMovies =
          JSON.parse(localStorage.getItem("searchedMovies")) || [];

        const newSearchedMovies = alreadySearchedMovies.concat(filteredMovies);

        const key = "id";

        const arrayUniqueByKey = [
          ...new Map(
            newSearchedMovies.map((item) => [item[key], item])
          ).values(),
        ];

        localStorage.setItem(
          "searchedMovies",
          JSON.stringify(arrayUniqueByKey)
        );
        setHandleAddMovies(arrayUniqueByKey);
      }
      if (location.pathname === "/saved-movies") {
        //setSearchText(searchText === '')
        const filteredSaveMovies = JSON.parse(
          localStorage.getItem("savedMovies")
        ).filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
        );
        if (filteredSaveMovies.length === 0) {
          setError("Ничего не найдено");
        }
        setSavedMovies(filteredSaveMovies);
      }
    }
  }

  const handleChangeCheckbox = () => {
    if (location.pathname === "/movies") {
      const isShortMovies = !checked;
      localStorage.setItem("shortMovies", JSON.stringify(isShortMovies));

      setChecked(isShortMovies);

      const searchFilms = JSON.parse(localStorage.getItem("searchedMovies"));

      const filteredMovies = searchFilms.filter((movie) => {
        return movie.duration <= TIMEOFTHESHORTFILMS;
      });

      isShortMovies
        ? setHandleAddMovies(filteredMovies)
        : setHandleAddMovies(searchFilms);
    } else if (location.pathname === "/saved-movies") {
      const isShortMovies = !checked;
      setChecked(isShortMovies);

      const searchSavedFilms = JSON.parse(localStorage.getItem("savedMovies"));

      const filteredFilms = searchSavedFilms.filter((movie) => {
        return movie.duration <= TIMEOFTHESHORTFILMS;
      });

      isShortMovies
        ? setHandleAddMovies(filteredFilms)
        : setHandleAddMovies(searchSavedFilms);
    }
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          type="search"
          className="search__input"
          placeholder="Фильм"
          onChange={(e) => setSearchText(e.target.value.toString())}
          value={searchText}
          required
        />
        <button
          className={
            searchText === ""
              ? "search__button search__button_unactive"
              : "search__button"
          }
          type="submit"
        ></button>
      </form>
      {isError && <div className="search__error">{error}</div>}
      <div className="check">
        <label className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            checked={
              location.pathname === "/movies"
                ? JSON.parse(localStorage.getItem("shortMovies")) || false
                : checked
            }
            onChange={() => handleChangeCheckbox()}
          />
          <span className="switch"></span>
        </label>
        <span className="check__text">Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;

//http://codeharmony.ru/materials/42 - инфа о кнопке, как в айфоне
//https://ftask.ru/2017/04/24/%D1%81%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA-%D0%B2-input-%D0%B2-crome-ie/ - убрать крестик у инпута
