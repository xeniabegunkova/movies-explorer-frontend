import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
//import Footer from "../Footer/Footer"

function Movies(isOpen) {
    return (
        <>
            <Header className={`nav ${isOpen && "nav__open"}`} />
            <SearchForm />

        </>
    )
}

export default Movies;