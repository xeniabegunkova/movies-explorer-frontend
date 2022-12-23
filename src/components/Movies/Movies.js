import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import './Movies.css';
import MoreButton from "../MoreButton/MoreButton";

function Movies(props) {

    return (
        <>
            <Header />
            <SearchForm getData={props.getData}/>
            <MoviesCardList/>
            <MoreButton />
            <Footer />
        </>
    )
}

export default Movies;