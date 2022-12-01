import './Promo.css'
import promoImg from '../../../images/promo.svg'

function Promo() {
    return (
        <section className="promo">
            <img
                src={promoImg}
                alt="promo img"
                className="promo__img"
            />
            <div className="promo_information">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <p className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
            </div>
        </section>
    )
}

export default Promo;