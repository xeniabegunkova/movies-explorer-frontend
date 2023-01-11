import "./MoreButton.css";

function MoreButton(props) {
  return (
    <section className="movies-more">
      <button className="movies-more__button" onClick={props.onClick}>
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;
