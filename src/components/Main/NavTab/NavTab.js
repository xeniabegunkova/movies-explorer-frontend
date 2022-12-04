function NavTab() {
    return (
        <ul className="navigation">
            <li className="navigation__list">
                <a className="navigation__point" href="about-project">
                    О проекте
                </a>
            </li>
            <li className="navigation__list">
                <a className="navigation__point" href="about-technology">
                    Технологии
                </a>
            </li>
            <li className="navigation__list">
                <a className="navigation__point" href="about-student">
                    Студент
                </a>
            </li>
        </ul>
    )
}

export default NavTab;