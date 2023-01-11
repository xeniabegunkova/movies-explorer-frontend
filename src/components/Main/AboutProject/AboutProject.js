import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="aboutProject">
      <h2 className="about__title">О проекте</h2>
      <div className="about__information">
        <div className="about__info">
          <h3 className="about__info-name">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__info">
          <h3 className="about__info-name">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__timing">
        <p className="about__timing-first">1 неделя</p>
        <p className="about__timing-fourth">4 недели</p>
        <p className="about__timing-description">Back-end</p>
        <p className="about__timing-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
