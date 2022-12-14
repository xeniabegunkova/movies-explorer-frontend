import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../images/logo.svg';
import './Login.css';


function Login(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setpasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле E-mail не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле пароль не может быть пустым');

    const handelerCheck = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setpasswordDirty(true);
                break;
            default:
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 20) {
            setPasswordError('Пароль должен содержать минимум 8 символов')
            if (!e.target.value) {
                setPasswordError('Что-то пошло не так...')
            }
        } else {
            setPasswordError('');
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('E-mail введен некорректно')
        } else {
            setEmailError('')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleRegistration(
            email,
            password
        );
    }
    return (
        <section
            className="login">
            <div className="login__greetings">
                <img
                    src={logo}
                    alt="login img"
                    className="login__img"
                />
                <h2 className="login__title">
                    Рады видеть!
                </h2>
            </div>

            <form
                className="login__form"
                onSubmit={handleSubmit}
            >

                <label className="login__form-name">
                    E-mail
                </label>

                <input
                    className="login__form-input"
                    value={email || ''}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="pochta@yandex.ru"
                    onChange={e => handleEmailChange(e)}
                    onBlur={e => handelerCheck(e)}
                    required
                />

                {(emailDirty && emailError) && <div className="login__input-error">{emailError}</div>}

                <label className="login__form-name">
                    Пароль
                </label>

                <input
                    className="login__form-input"
                    value={password || ''}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    onChange={e => handlePasswordChange(e)}
                    onBlur={e => handelerCheck(e)}
                    required
                    minLength="6"
                    maxLength="20"
                />
                {(passwordDirty && passwordError) && <div className="login__input-error">{passwordError}</div>}

            </form>

            <button
                className="login__button"
                type="submit">
                Войти
            </button>

            <div className="login__singup">
                <p className="login__singup-text">
                    Ещё не зарегистрированы?
                    <Link to="/signup" className="login__singup-link">
                        Регистрация
                    </Link>
                </p>
            </div>

        </section>
    )
}

export default Login;

//https://habr.com/ru/company/yandex/blog/348240/