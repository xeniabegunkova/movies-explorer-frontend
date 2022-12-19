import { NavLink } from 'react-router-dom';
import './NavigationMain.css';

function NavigationMain() {
    return (
        <div className='navigation-auth'>
            <nav className='navigation-auth__main'>
                <NavLink to="/signup" className='navigation-auth__main-name'>
                    Регистрация
                </NavLink>
                <NavLink to="/signin" className='navigation-auth__main-name navigation-auth__main-name_button'>
                    Войти
                </NavLink>
            </nav>
        </div>
    )
}

export default NavigationMain;