import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { CurrentMoviesContext } from "../../contexts/CurrentMoviesContext";
import { useContext } from "react";

function MoviesCardList() {

    const movies = useContext(CurrentMoviesContext)

    console.log(movies)

    //width of screen

    /*const screenWidth_1280 = 1280;
    const screenWidth_768 = 768;

    //num of cells

    const numberOfCells_1280 = 12;
    const numberOfCells_768 = 8;
    const numberOfCells_600 = 5;

    //num of cells in a row

    const numberOfCellsInARow_1280 = 3;
    const numberOfCellsInARow_768 = 2;
    const numberOfCellsInARow_600 = 1;

    const width = window.innerWidth;

    const [moviesCounter, setMoviesCounter] = useState();
    const [more, setMore] = useState();

    const countOfMovies = (width) => {
        if (width > screenWidth_1280) {
            setMoviesCounter(numberOfCells_1280);
            return setMore(numberOfCellsInARow_1280)
        } else if (width > screenWidth_768) {
            setMoviesCounter(numberOfCells_768);
            return setMore(numberOfCellsInARow_768);
        } else
            setMoviesCounter(numberOfCells_600);
        return setMore(numberOfCellsInARow_600);
    }

    useEffect(() => {
        const width = window.innerWidth;
        countOfMovies(width);
    })

    useEffect(() => {
        const timeout = (e) => setTimeout(countOfMovies(e), 3000);
        window.onresize = function (e) {
            timeout(e.currentTarget.innerWidth)
        }
        return window.onresize = function (e) {
            timeout(e.currentTarget.innerWidth)
        }
    }, []);

    const moreMovies = () => {
        if (width >= screenWidth_1280) {
            setMore((prev) => prev + numberOfCellsInARow_1280);
        } else {
            setMore((prev) => prev + numberOfCellsInARow_768);
        }
    };*/

    return (
        <section className='movie-list'>
            <ul className='movie-list__elements'>
                {
                    movies.map((movie) => {
                        return (
                            <MoviesCard
                                movie={movie}
                                key={movie._id}
                            />
                        )
                    }
                    )}
            </ul>
                
        </section>
    )
}

export default MoviesCardList;

//https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
//https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
//https://stackoverflow.com/questions/641857/javascript-window-resize-event
//https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event