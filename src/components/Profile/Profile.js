import Header from "../Header/Header";
import { Link } from "react-router-dom";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState, useContext } from 'react';

function Profile() {

    const currentUser = useContext(CurrentUserContext);

    const [handleUpdate, setHandleUpdate] = useState({ name: '', email: '' });
    const [redact, setRedact] = useState(false);

    useEffect(() => {
        setHandleUpdate({
            name: currentUser.name, 
            email: currentUser.email
        });
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHandleUpdate((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Header />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__about">
                    <label className="profile__label">Имя
                        <input
                            className="profile__input"
                            minLength={2}
                            maxLength={30}
                            type="text"
                            defaultValue={handleUpdate.name}
                            onChange={handleChange}
                        ></input>
                    </label>
                    <label className="profile__label">E-mail
                        <input
                            className="profile__input"
                            type="email"
                            defaultValue={currentUser.email}
                            onChange={handleChange}
                        ></input>
                    </label>
                </form>
                <button className="profile__button" type='submit' onClick={() => setRedact(!redact)}>
                    Редактировать
                </button>
                <Link to='/'
                    className="profile__button profile__button_logout"
                >
                    Выйти из аккаунта
                </Link>
            </section>
        </>
    )
}

export default Profile;

//https://translated.turbopages.org/proxy_u/en-ru.ru.574e987f-63a46962-764ce0c3-74722d776562/https/stackoverflow.com/questions/60330984/object-values-undefined-in-post-request-from-reactjs