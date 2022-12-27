import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies(props) {

    return (
        <>
            <Header />
            <SearchForm getData={props.getData}/>
            <MoviesCardList/>
            <Footer />
        </>
    )
}

export default Movies;