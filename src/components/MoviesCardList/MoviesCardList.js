import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({ moviesConstants }) {
    return (
        <section className='movie-list'>
            <ul className='movie-list__elements'>
                    {
                        moviesConstants.map((movie) => {
                            return (
                                <MoviesCard movie={movie} key={movie._id} saved={false} />
                            )
                        }
                        )}
            </ul>
        </section>
    )
}

export default MoviesCardList;