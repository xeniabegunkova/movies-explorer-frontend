import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';


import './App.css';

import { useEffect, useState } from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
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
        .then((data) => {
          setEmail(data.data.email);
          setName(data.data.name);
          setId(data.data._id);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((data) => {
          setEmail(data.data.email);
          setName(data.data.name);
          setId(data.data._id);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [navigate.location])

  function handleRegistration(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setInfoTooltipOpen(true);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setStatus(false)
        setInfoTooltipOpen(true)
      })
  }

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function closePopup() {
    setInfoTooltipOpen(false)
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closePopup();
      }
    }
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    }
  })

  function handleLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchedMovies');
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>

        <CurrentMoviesContext.Provider value={movies}>

          <Routes>
            <Route exact path="/" element={<Main />} />

            <Route exact path="/signin" element={<Login handleLogin={handleLogin} />} />

            <Route exact path="/signup" element={<Register handleRegistration={handleRegistration} />} />

            <Route exact path="/movies" element={<Movies loggedIn={loggedIn} />} />

            <Route exact path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />

            <Route exact path="/profile" element={<Profile
              setCurrentUser={setCurrentUser}
              name={name}
              email={email}
              id={id}
              loggedIn={loggedIn}
              handleLogOut={handleLogOut}
            />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Routes>
            <Route exact path="/" element={<Footer />} />
          </Routes>

          <Routes>
            <Route exact path="profile" element={<InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closePopup}
              status={status} />} />
          </Routes>

        </CurrentMoviesContext.Provider>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;