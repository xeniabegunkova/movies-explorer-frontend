import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../images/logo.svg';
import './Register.css';


function Register(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setpasswordDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле E-mail не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле пароль не может быть пустым');
    const [nameError, setNameError] = useState('Поле имя не может быть пустым');

    const handelerCheck = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setpasswordDirty(true);
                break;
            default:
        }
    }

    function handleNameChange(e) {
        setName(e.target.value);
        const re = /^[A-Za-zА-Яа-яЁё /s -]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Имя должно содержать только буквы')
        }
        else if (e.target.value.length < 2 || e.target.value.length > 20) {
            setNameError('Имя должно содержать минимум 2 символа')
        } else {
            setNameError('');
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 20) {
            setPasswordError('Пароль должен содержать от 8 до 20 символов')
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
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('E-mail введен некорректно')
        } else {
            setEmailError('')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleRegistration(
            name,
            email,
            password
        );
    }

    return (
        <section
            className="auth">
            <div className="auth__greetings">
                <Link to="/" className="auth__link">
                    <img
                        src={logo}
                        alt="auth img"
                        className="auth__img"
                    />
                </Link>
                <h2 className="auth__title">
                    Добро пожаловать!
                </h2>
            </div>

            <form
                className="auth__form"
                onSubmit={handleSubmit}
            >

                <label className="auth__input-name">
                    Имя
                </label>

                <input
                    className="auth__form-input"
                    type="text"
                    name="name"
                    id="name"
                    value={name.value} 
                    pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                    placeholder="Имя"
                    minLength="2"
                    maxLength="20"
                    onBlur={e => handelerCheck(e)}
                    onChange={e => handleNameChange(e)}
                    required
                />

                {(nameDirty && nameError) && <div className="auth__input-error">{nameError}</div>}

                <label className="auth__input-name">
                    E-mail
                </label>

                <input
                    className="auth__form-input"
                    type="email"
                    name="email"
                    id="email"
                    value={email.value} 
                    placeholder="Почта"
                    onChange={e => handleEmailChange(e)}
                    onBlur={e => handelerCheck(e)}
                    required
                />

                {(emailDirty && emailError) && <div className="auth__input-error">{emailError}</div>}

                <label className="auth__input-name">
                    Пароль
                </label> 

                <input
                    className="auth__form-input"
                    value={password.value} 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    onChange={e => handlePasswordChange(e)}
                    onBlur={e => handelerCheck(e)}
                    required
                    minLength="6"
                    maxLength="20"
                />
                {(passwordDirty && passwordError) && <div className="auth__input-error">{passwordError}</div>}

                <button
                    className={!nameError && !emailError && !passwordError && password !== '' && email !== '' && name !== '' ? 'auth__button' : "auth__button auth__button_unactive"}
                    type="submit"
                    disabled={!nameError && !emailError && !passwordError ? false : true}
                >
                    Зарегистрироваться
                </button>

                <div className="auth__singup">
                    <p className="auth__singup-text">
                        Уже зарегистрированы?
                        <Link to="/signin" className="auth__singup-link">
                            Войти
                        </Link>
                    </p>
                </div>

            </form>
        </section>
    )
}

export default Register;

//https://habr.com/ru/company/yandex/blog/348240/