import "./AboutProject.css"

function AboutProject() {
    return (
        <section className="about">
            <h2 className="about__title">
                О проекте
            </h2>
            <div className="about__information">
                <div className="about__info">
                    <h3 className="about__info_name">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about__info_text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about__info">
                    <h3 className="about__info_name">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about__info_text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about__timing">
                <p className="about__timing_first">1 неделя</p>
                <p className="about__timing_fourth">4 недели</p>
                <p className="about__timing_description">Back-end</p>
                <p className="about__timing_description">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;