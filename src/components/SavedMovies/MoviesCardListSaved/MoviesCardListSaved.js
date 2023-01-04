import { useEffect, useState } from "react";
import MoviesCard from "../../MoviesCard/MoviesCard";
import MainApi from "../../../utils/MainApi"
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader"

function MoviesCardListSaved() {

    const [savedMovie, setSavedMovie] = useState([]);
    const [error, setError] = useState('');
    const location = useLocation();
    const [load, setLoad] = useState(false);

    function saveMovie() {
        if (location.pathname === '/saved-movies') {
            MainApi.getSavedMovies(localStorage.getItem('jwt'))
                .then((data) => {
                    let array = data.data
                    localStorage.setItem('savedMovies', JSON.stringify(array))
                    setSavedMovie(JSON.parse((localStorage.getItem('savedMovies'))))
                    console.log(JSON.parse((localStorage.getItem('savedMovies'))))
                    console.log(savedMovie)
                    setLoad(true)
                })
                .catch((err) => {
                    setError('Во время запроса произошла ошибка')
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        saveMovie()
    }, [location.pathname]);

    const checkMovieId = (savedMovies, movie) => {

        return savedMovies.find((data) => {
            return data.movieId === movie.id
        });
    }

    return (
        <>
            <section className='movie-list'>
                <ul className='movie-list__elements'>
                    { load ? savedMovie
                        .map((movie, idx) => {
                            return (
                                <MoviesCard
                                    key={idx}
                                    id={movie.id}
                                    movie={movie}
                                    nameRU={movie.nameRU}
                                    image={movie.image}
                                    trailerLink={movie.trailerLink}
                                    duration={movie.duration}
                                    isSaved={checkMovieId(savedMovie, movie)}
                                    error={setError}
                                />
                            )
                        }
                        ).reverse() : <Preloader />}
                </ul>
            </section>
        </>
    )
}

export default MoviesCardListSaved;