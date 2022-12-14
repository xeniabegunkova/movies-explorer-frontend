import './SearchForm.css'
//import btn from '../../images/checkboxBtn.svg';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input type="search" className="search__input" placeholder="Фильм" required/>
                <button className="search__button" type="submit">
                </button>
            </form>

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
//https://ftask.ru/2017/04/24/%D1%81%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B8%D0%BA-%D0%B2-input-%D0%B2-crome-ie/ - убрать крестик у инпута