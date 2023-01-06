//https://reactrouter.com/en/main/hooks/use-location

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import MainApi from '../../utils/MainApi'

function MoviesCard({ movie, handleDelete, searchMovies = [], handleDeleteLike }) {

    console.log(handleDelete)

    const { nameRU, image, duration, trailerLink } = movie;

    const [isSave, setIsSave] = useState(false);

    const location = useLocation();

    useEffect(() => {
        checkSaveMovie()
    }, [])

    function checkSaveMovie() {
        JSON.parse(localStorage.getItem('savedMovies')).forEach(e => {
            if (e.nameRU === movie.nameRU) {
                setIsSave(!isSave)
            }
        });
    }

    const handleSave = () => {
        MainApi.addMoviesToSave(movie)
            .then((data) => {
                searchMovies.forEach((item) => {
                    if (data.id === item.id) {
                        console.log(movie)
                    }
                })
                setIsSave(!isSave);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDeleteMovie = () => {
        console.log(handleDelete)
        handleDelete(movie)
    }

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    return (
        <li className="movie-card">
            <a className='movie-card__link'
                href={trailerLink}
                rel="noreferrer"
                target="_blank"
            >
                <img
                    className="movie-card__img"
                    src={location.pathname === '/movies' ?
                        'https://api.nomoreparties.co' + image.url : movie.image}
                    rel="noreferrer"
                    target="_blank"
                    alt={nameRU} />
            </a>
            <div className="movie-card__information">
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{nameRU}</h2>
                    {location.pathname === '/movies' ?
                        <button
                            className={`movie-card__save ${isSave ? 'movie-card__save-active' : ''}`}
                            type='button'
                            onClick={isSave ? handleDeleteMovie : handleSave} />
                        :
                        <button className='movie-card__remove' type='button' onClick={handleDeleteMovie} />
                    }
                </div>
                <p className="movie-card__duration">{getTimeFromMins(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;