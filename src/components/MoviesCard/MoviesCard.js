import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {
    const { title, image, duration } = movie;

    const [isSave, setIsSave] = useState(false);

    const handleSave = () => {
        setIsSave(!isSave);
    }

    const saveMovie = (
        `movie-card__save ${isSave ? 'movie-card__save-active' : ''}`
    )
    
    const location = useLocation();

    return (
        <section className="movie-card">
            <img
                className="movie-card__img"
                src={image}
                alt={title} />
            <div className="movie-card__information">
                <div className="movie-card__info">
                    <h2 className="movie-card__title">{title}</h2>
                        {location.pathname === '/movies' ?
                            <button className={saveMovie} type='button' onClick={handleSave} />
                            :
                            <button className='movie-card__remove' type='button' />
                        }
                </div>
                <p className="movie-card__duration">{duration}</p>
            </div>
        </section>
    )
}

export default MoviesCard;

//https://reactrouter.com/en/main/hooks/use-location