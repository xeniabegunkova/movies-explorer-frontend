import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MainApi from '../../utils/MainApi'
import './MoviesCardList.css';
import MoreButton from "../MoreButton/MoreButton";
import {
    SCREENWIDTH_1280,
    SCREENWIDTH_768,
    NUMBEROFCELLS_1280,
    NUMBEROFCELLS_600,
    NUMBEROFCELLS_768,
    NUMBEROFCELLSINAROW_1280,
    NUMBEROFCELLSINAROW_768
} from '../../utils/constants'

function MoviesCardList({ searchMovies = [] }) {

    //проверка фильмов на сохранение через проход по массиву
    /*function getSavedMovieCard(movie) {
        return moviesSaved.find(savedMovie => savedMovie.id === movie.id)
    };*/

    const [size, setSize] = useState(window.innerWidth);
    const [moviesCounter, setMoviesCounter] = useState();
    const [more, setMore] = useState();
    const [savedMovie, setSavedMovie] = useState([]);

    useEffect(() => {
        MainApi.getSavedMovies()
            .then(data => {
                setSavedMovie(data.data)
                console.log(data)
            })
    }, []);

    const checkMovieId = (savedMovies, movie) => {

        return savedMovies.find((data) => {
            return data.movieId === movie.id
        });
    }


    useEffect(() => {
        const width = () => setSize(window.innerWidth);
        window.addEventListener('resize', width);
        if (size > SCREENWIDTH_1280) {
            setMoviesCounter(NUMBEROFCELLS_1280);
            setMore(NUMBEROFCELLSINAROW_1280)
        } else if (size > SCREENWIDTH_768) {
            setMoviesCounter(NUMBEROFCELLS_768);
            setMore(NUMBEROFCELLSINAROW_768);
        } else {
            setMoviesCounter(NUMBEROFCELLS_600);
            setMore(NUMBEROFCELLSINAROW_768);
        }
        return () => window.removeEventListener('resize', width)
    }, [size]);

    return (
        <>
            <section className='movie-list'>
                <ul className='movie-list__elements'>
                    {
                        searchMovies.slice(0, moviesCounter).map((movie) => {
                            return (
                                <MoviesCard
                                    key={movie.id}
                                    movie={movie}
                                    nameRU={movie.nameRU}
                                    image={movie.image}
                                    trailerLink={movie.trailerLink}
                                    duration={movie.duration}
                                    isSaved={checkMovieId(savedMovie, movie)}
                                />
                            )
                        }
                        )}
                </ul>
            </section>
            {searchMovies.length > moviesCounter ?
                <MoreButton onClick={() => setMoviesCounter(moviesCounter + more)} /> : ''
            }
        </>
    )
}

export default MoviesCardList;

//https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
//https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
//https://stackoverflow.com/questions/641857/javascript-window-resize-event
//https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event