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
                    let savedMoviesArray = data.data;
                    localStorage.setItem('savedMovies', JSON.stringify(savedMoviesArray));
                    setSavedMovie(JSON.parse((localStorage.getItem('savedMovies'))));
                    setLoad(true);
                })
                .catch((err) => {
                    setError('Во время запроса произошла ошибка');
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        saveMovie()
    }, [location.pathname]);

    const handleDelete = (movie) => {
        MainApi.deleteMovie(movie._id)
            .then((data) => {
                const newMass = savedMovie.filter(e => e._id !== data._id)
                setSavedMovie(newMass)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <section className='movie-list'>
                <ul className='movie-list__elements'>
                    {load ? savedMovie
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
                                    error={error}
                                    handleDelete={handleDelete}
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