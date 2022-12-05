import "./Footer.css"

function Footer() {
    return (
        <section className="footer">
            <h2 className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__info">
                <p className="footer__year">&copy; {new Date().getFullYear()}</p>
                <div className="footer__links">
                    <a
                        className="footer__link"
                        href="https://practicum.yandex.ru/"
                        rel="noreferrer"
                        target="_blank"
                        >
                        Яндекс.Практикум
                    </a>
                    <a
                        className="footer__link"
                        href="https://github.com/"
                        rel="noreferrer"
                        target="_blank"
                        >
                        Github
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer;