import Header from "../Header/Header";
import { Link } from "react-router-dom";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState, useContext } from 'react';
import MainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function Profile({ setCurrentUser, handleLogOut }) {

    const currentUser = useContext(CurrentUserContext);

    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
    const [status, setStatus] = useState(false);

    const [userData, setUserData] = useState({ name: '', email: '' });

    useEffect(() => {
        setUserData({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));

    };

    function userDataChange(data) {
        MainApi.updateUserData(data.name, data.email)
            .then((data) => {
                localStorage.getItem('jwt')
                console.log(data.token)
                setCurrentUser(data.data);
                setInfoTooltipOpen(true);
                setStatus(true);
            })
            .catch((err) => {
                console.log(err);
                setStatus(false)
                setInfoTooltipOpen(true)
            })
    }

    function closePopup() {
        setInfoTooltipOpen(false)
    }

    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                closePopup();
            }
        }
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }
    })

    return (
        <>
            <Header />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__about" >
                    <label className="profile__label">Имя
                        <input
                            className="profile__input"
                            minLength={2}
                            maxLength={30}
                            name='name'
                            type="text"
                            defaultValue={userData.name}
                            onChange={handleChange}
                        ></input>
                    </label>

                    <label className="profile__label">E-mail
                        <input
                            className="profile__input"
                            type="email"
                            name='email'
                            defaultValue={currentUser.email}
                            onChange={handleChange}
                        ></input>
                    </label>

                </form>
                <button
                    className={
                        userData.name !== currentUser.name || userData.email !== currentUser.email
                            ?
                            'profile__button' : "profile__button profile__button_unactive"
                    }
                    type='submit'
                    disabled={
                        userData.name !== currentUser.name || userData.email !== currentUser.email
                            ?
                            false : true}
                    onClick={() => userDataChange(userData)}
                >
                    Редактировать
                </button>
                <Link to='/'
                    className="profile__button profile__button_logout"
                    onClick={handleLogOut}
                >
                    Выйти из аккаунта
                </Link>

                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClose={closePopup}
                    status={status} />
            </section>
        </>
    )
}

export default Profile;

//https://translated.turbopages.org/proxy_u/en-ru.ru.574e987f-63a46962-764ce0c3-74722d776562/https/stackoverflow.com/questions/60330984/object-values-undefined-in-post-request-from-reactjs