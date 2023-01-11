import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__information">
        <h3 className="techs__subtitle">7 Технологий</h3>
        <p className="techs__about">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs-list">
        <li className="techs-list__points">HTML</li>
        <li className="techs-list__points">CSS</li>
        <li className="techs-list__points">JS</li>
        <li className="techs-list__points">React</li>
        <li className="techs-list__points">Git</li>
        <li className="techs-list__points">Express.js</li>
        <li className="techs-list__points">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
