import unsuccess from "../../images/unsuccess.svg";
import success from "../../images/success.svg";
import "./InfoToolTip.css";

function InfoTooltipError({ isOpen, onClose, status }) {
  return (
    <section className={`popup ${isOpen && "popup_is-open"}`}>
      <div className="popup__content_tooltip">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        />
        {status ? (
          <>
            <img
              src={`${success}`}
              alt="Успешная регистрация"
              className="popup__tooltip-img"
            />
            <p className="popup__message">Вы успешно зашли в аккаунт!</p>
          </>
        ) : (
          <>
            <img
              src={`${unsuccess}`}
              alt="Что-то пошло не так"
              className="popup__tooltip-img"
            />
            <p className="popup__message">
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default InfoTooltipError;
