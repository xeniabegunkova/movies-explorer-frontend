import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { getMovieList } from '../../utils/MoviesApi';
import MoreButton from "../MoreButton/MoreButton";

function MoviesCardList() {

    const [data, setData] = useState([]);
    const [size, setSize] = useState(window.innerWidth);
    const [moviesCounter, setMoviesCounter] = useState();
    const [more, setMore] = useState();

    //width of screen

    const screenWidth_1280 = 1280;
    const screenWidth_768 = 600;

    //num of cells

    const numberOfCells_1280 = 12;
    const numberOfCells_768 = 8;
    const numberOfCells_600 = 5;

    //num of cells in a row

    const numberOfCellsInARow_1280 = 3;
    const numberOfCellsInARow_768 = 2;

    useEffect(() => {
        getMovieList()
            .then((response) => {
                if (response) {
                    setData(response)
                }
            })
    }, [])

    useEffect(() => {
        const width = () => setSize(window.innerWidth);
        window.addEventListener('resize', width);
        if (size > screenWidth_1280) {
            setMoviesCounter(numberOfCells_1280);
            setMore(numberOfCellsInARow_1280)
        } else if (size > screenWidth_768) {
            setMoviesCounter(numberOfCells_768);
            setMore(numberOfCellsInARow_768);
        } else {
            setMoviesCounter(numberOfCells_600);
            setMore(numberOfCellsInARow_768);
        }
        return () => window.removeEventListener('resize', width)
    }, [size]);

    return (
        <>
            <section className='movie-list'>
                <ul className='movie-list__elements'>
                    {
                        data.slice(0, moviesCounter).map((movie) => {
                            return (
                                <MoviesCard
                                    key={movie.id}
                                    nameRU={movie.nameRU}
                                    image={movie.image}
                                    trailerLink={movie.trailerLink}
                                    duration={movie.duration}
                                />
                            )
                        }
                        )}
                </ul>
            </section>
            {data.length > moviesCounter ?
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