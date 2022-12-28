import { useEffect, useState } from "react";
import './SearchForm.css'
import { getMovieList } from '../../utils/MoviesApi';

function SearchForm({ setSearchMovies }) {
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const [movies, setMovies] = useState();

    useEffect(() => {
        getMovieList()
            .then((response) => {
                if (response) {
                    setMovies(response)
                }
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (searchText === '') {
            setError('Нужно ввести ключевое слово')
        }
        const filteredMovies = movies.filter(movie =>
            movie
                .nameRU
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            movie
                .nameEN
                .toLowerCase()
                .includes(searchText.toLowerCase())
        )
        const alreadySearchedMovies = JSON.parse(localStorage.getItem('searchedMovies')) || [];
        const newSearchedMovies = filteredMovies.concat(alreadySearchedMovies);
        localStorage.setItem('searchedMovies', JSON.stringify(newSearchedMovies));
        setSearchMovies(newSearchedMovies);
    }


    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit} noValidate>
                <input
                    type="search"
                    className="search__input"
                    placeholder="Фильм"
                    onChange={e => setSearchText(e.target.value)}
                    value={searchText}
                    required />
                <button className="search__button" type="submit">
                </button>
            </form>
            <div>{error}</div>
            <div className='check'>
                <label className="checkbox">
                    <input className="checkbox__input" type="checkbox" />
                    <span className='switch'></span>
                </label>
                <span className="check__text">
                    Короткометражки
                </span>
            </div>
        </section >
    )
}

export default SearchForm;

//http://codeharmony.ru/materials/42 - инфа о кнопке, как в айфоне
//https://ftask.ru/2017/04/24/%D1%81%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA-%D0%B2-input-%D0%B2-crome-ie/ - убрать крестик у инпута