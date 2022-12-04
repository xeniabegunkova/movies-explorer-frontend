import "./Techs.css"

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">
                Технологии
            </h2>
            <div className="techs__information">
                <h3 className="techs__subtitle">
                    7 Технологий
                </h3>
                <p className="techs__about">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
            </div>
            <ul className="techs__list">
                <li className="techs__points">
                    HTML
                </li>
                <li className="techs__points">
                    CSS
                </li>
                <li className="techs__points">
                    JS
                </li>
                <li className="techs__points">
                    React
                </li>
                <li className="techs__points">
                    Git
                </li>
                <li className="techs__points">
                    Express.js
                </li>
                <li className="techs__points">
                    mongoDB
                </li>
            </ul>
        </section>
    )
}

export default Techs;