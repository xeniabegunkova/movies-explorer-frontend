import './SearchForm.css'
//import btn from '../../images/checkboxBtn.svg';

function SearchForm() {
    return (
        <section className="search__form">
            <label className="search__part">
                <input type="search" className="search__film" placeholder="Фильм" />
                <button className="search__button" type="button">
                </button>
            </label>

            <div className='check'>
                <label className="checkbox">
                    <input className="checkbox__input" type="checkbox" />
                    <div className='switch'></div>
                </label>
                <span className="checkbox__text">
                    Короткометражки
                </span>
            </div>
        </section >
    )
}

export default SearchForm;

////http://codeharmony.ru/materials/42 - инфа о кнопке, как в айфоне