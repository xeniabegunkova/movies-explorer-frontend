import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavigationFilms.css';

function NavigationFilms() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className={`navigation ${isOpen && "navigation_open"}`}>
                <nav className={`navigation__movies ${isOpen && "navigation__movies_open"}`}>
                    <div className="navigation__films">
                        <NavLink
                            to="/"
                            className='navigation__films-name navigation__films-name_mobile '>
                            Главная
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className='navigation__films-name '>
                            Фильмы
                        </NavLink>
                        <NavLink
                            to="/saved-movies"
                            className='navigation__films-name'>
                            Сохранённые фильмы
                        </NavLink>
                    </div>

                    <NavLink
                        to="/profile"
                        className='navigation__films-name navigation__films-name_account'>
                        Аккаунт
                    </NavLink>
                </nav>

                <div className={`menu__mobile ${isOpen && "menu__mobile_open"}`} onClick={() => setIsOpen(!isOpen)}>
                </div>
            </section>
        </>
    )
}

export default NavigationFilms;