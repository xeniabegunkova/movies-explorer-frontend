import './Promo.css'
import promoImg from '../../../images/promo.svg'
//import NavTab from '../NavTab/NavTab';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__information">
                <img
                    src={promoImg}
                    alt="promo img"
                    className="promo__img"
                />
                <div className='promo__text'>
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <p className="promo__subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                </div>
            </div>
            <nav>
            <a className='promo__link' href='#aboutProject'>Узнать больше</a>
            </nav>
        </section>
    )
}

export default Promo;

//https://htmlacademy.ru/courses/305/run/5