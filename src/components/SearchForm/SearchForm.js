import { useState } from 'react';
import './SearchForm.css'
//import btn from '../../images/checkboxBtn.svg';

function SearchForm(props) {
    const [movies, setMovies] = useState('');
    const [error, setError] = useState('');

    const handleMovies = (e) => {
        setMovies(e.target.value)
        if (e.target.value) {
            setError('')
        }
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        if (movies === '') {
            setError('Нужно ввести ключевое слово')
        } else {
            props.getData(movies)
        }
        // Передаём значения управляемых компонентов во внешний обработчик
    }


    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit} noValidate>
                <input 
                type="search" 
                className="search__input" 
                placeholder="Фильм"
                onChange={e => handleMovies(e)}
                value={movies} 
                required />
                <button className="search__button" type="submit">
                </button>
            </form>

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