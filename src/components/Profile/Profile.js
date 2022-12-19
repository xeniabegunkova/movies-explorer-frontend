import Header from "../Header/Header";
import { user } from "../../utils/userConstants";
import { Link } from "react-router-dom";
import './Profile.css';

function Profile() {
    const { name, email } = user;
    return (
        <>
            <Header />
            <section className="profile">
                <h2 className="profile__title">Привет, {name}!</h2>
                <form className="profile__about">
                    <label className="profile__label">Имя
                        <input
                            className="profile__input"
                            minLength={2}
                            maxLength={30}
                            type="text"
                            defaultValue={name}
                            disabled
                        ></input>
                    </label>
                    <label className="profile__label">E-mail
                        <input
                            className="profile__input"
                            type="email"
                            defaultValue={email}
                            disabled
                        ></input>
                    </label>
                </form>
                <button className="profile__button">Редактировать</button>
                <Link to='/' className="profile__button profile__button_logout">Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;