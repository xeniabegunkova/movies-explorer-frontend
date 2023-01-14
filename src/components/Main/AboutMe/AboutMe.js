import photoVitaliy from "../../../images/vitaliy.svg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__information">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img
          src={photoVitaliy}
          alt="Pic of Vilaliy"
          className="about-me__img"
        />
      </div>
    </section>
  );
}

export default AboutMe;

//https://developer.mozilla.org/ru/docs/Web/HTML/Element/A#:~:text=%D0%90%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%20href%20%D1%83%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%20%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83%3A%20%D0%BB%D0%B8%D0%B1%D0%BE,%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%2C%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%D1%81%D1%8F%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BE%D0%BC.
