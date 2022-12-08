import { NavLink } from 'react-router-dom';
import closeIcon from '../../images/closeIcon.svg'
import './MoviesHiddenMenu.css';

function MoviesHiddenMenu(props) {
    return (
        <section className="menu">
            <div className="menu__close" onClick={props.onCloseMenu}>
                <img
                    src={closeIcon}
                    alt="close Icon"
                    className="menu__close-icon"
                />
            </div>
            <nav className='menu__navigation'>
                <NavLink
                    to="/"
                    className='menu__navigation-link'>
                    Главная
                </NavLink>
                <NavLink
                    to="/movies"
                    className={"menu__navigation-link" + (props.isAvtive ? 'hmenu__navigation-link_active' : '')}
                    onClick={props.onCloseMenu}>
                    Фильмы
                </NavLink>
                <NavLink
                    to="/saved-movies"
                    className='menu__navigation-link'
                    onClick={props.onCloseMenu}>
                    Сохранённые фильмы
                </NavLink>
                <NavLink
                    to="/profile"
                    className='menu__navigation-link'
                    onClick={props.onCloseMenu}>
                    Аккаунт
                </NavLink>
            </nav>
        </section>
    )
}

export default MoviesHiddenMenu;
