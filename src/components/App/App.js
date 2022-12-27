import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getMovieList } from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';

import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loggedIn && Promise.all([
      MainApi.getUserData(),

      MainApi.getSavedMovies(),
    ])
      .then(([res, movies]) => {
        setCurrentUser({
          name: res.data.name,
          email: res.data.email,
          _id: res.data._id,
        });

        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          setEmail(res.data.email);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  function handleRegistration(name, email, password) {
    auth.register(name, email, password)
      .then((data) => {
        if (data) {
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>

        <CurrentMoviesContext.Provider value={movies}>

          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>

          <Routes>
            <Route exact path="/signin" element={<Login handleLogin={handleLogin} />} />
          </Routes>

          <Routes>
            <Route exact path="/signup" element={<Register handleRegistration={handleRegistration}/>} />
          </Routes>

          <Routes>
            <Route exact path="/movies" element={<Movies loggedIn={loggedIn} />} />
          </Routes>

          <Routes>
            <Route exact path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>} />
          </Routes>

          <Routes>
            <Route exact path="/profile" element={<Profile setCurrentUser={setCurrentUser} />} />
          </Routes>

          <Routes>
            <Route exact path="/error" element={<Error />} />
          </Routes>

          <Routes>
            <Route exact path="/" element={<Footer />} />
          </Routes>

        </CurrentMoviesContext.Provider>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
