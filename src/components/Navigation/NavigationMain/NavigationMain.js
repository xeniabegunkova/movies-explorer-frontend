import { NavLink } from 'react-router-dom';
import './NavigationMain.css';

function NavigationMain() {
    return (
        <nav className='navigation__main'>
        <NavLink to="/signup" className='navigation__main_name'>
            Регистрация
        </NavLink>
        <NavLink to="/signin" className='navigation__main_name navigation__main_name-button'>
            Войти
        </NavLink>
    </nav>
    )
}

export default NavigationMain;