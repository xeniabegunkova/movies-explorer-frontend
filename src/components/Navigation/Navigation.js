import { NavLink } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink to="/signup" className='navigation__name'>
                Регистрация
            </NavLink>
            <NavLink to="/signin" className='navigation__name navigation__name_button'>
                Войти
            </NavLink>
        </nav>
    );
}

export default Navigation;

//https://metanit.com/web/react/4.3.php