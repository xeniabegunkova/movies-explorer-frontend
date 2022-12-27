import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import MainApi from '../../utils/MainApi'

function MoviesCard(movie) {

    const { nameRU, image, duration, trailerLink } = movie;

    const [isSave, setIsSave] = useState(false);

    const handleSave = (movie) => {
        setIsSave(!isSave);
        MainApi.addMoviesToSave(movie)
        .then((data) => {
            console.log(data)
        })
    }

    const saveMovie = (
        `movie-card__save ${isSave ? 'movie-card__save-active' : ''}`
    )

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    const location = useLocation();

    return (
        <li className="movie-card">
            <a className='movie-card__link' href={trailerLink}>
                <img
                    className="movie-card__img"
                    src={'https://api.nomoreparties.co' + image.url}
                    target={'_blank'}
                    alt={nameRU} />
            </a>
            <div className="movie-card__information">
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{nameRU}</h2>
                    {location.pathname === '/movies' ?
                        <button className={saveMovie} type='button' onClick={handleSave} />
                        :
                        <button className='movie-card__remove' type='button' />
                    }
                </div>
                <p className="movie-card__duration">{getTimeFromMins(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;

//https://reactrouter.com/en/main/hooks/use-location