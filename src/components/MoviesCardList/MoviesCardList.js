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
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ searchMovies = [], setSearchMovies }) {

    const [size, setSize] = useState(window.innerWidth);
    const [moviesCounter, setMoviesCounter] = useState();
    const [more, setMore] = useState();
    const [savedMovie, setSavedMovie] = useState([]);
    const [load, setLoad] = useState(false);

    function checkSaveMovie() {
        let array = []
        MainApi.getSavedMovies()
            .then((data) => {
                array = data.data
                localStorage.setItem('savedMovies', JSON.stringify(array));
            })
    }

    useEffect(() => {
        checkSaveMovie();
    }, [])

    useEffect(() => {
        setLoad(true)
    })


    useEffect(() => {
        const handleWidth = () => setSize(window.innerWidth);
        window.addEventListener('resize', handleWidth);
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
        return () => window.removeEventListener('resize', handleWidth)
    }, [size]);

    const handleDelete = (movie) => {
        MainApi.deleteMovie(movie._id)
            .then((data) => {
                const newArray = savedMovie.filter(e => e._id !== data._id)
                localStorage.setItem('savedMovies', JSON.stringify(newArray))
                setSavedMovie(newArray)
                setSearchMovies(JSON.parse((localStorage.getItem('searchedMovies'))))
                console.log(setSearchMovies)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <section className='movie-list'>
                <ul className='movie-list__elements'>
                    {load ?
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
                            )
                        }
                        ) : <Preloader />}
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