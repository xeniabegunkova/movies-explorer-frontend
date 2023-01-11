import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { CurrentMoviesContext } from "../../contexts/CurrentMoviesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import InfoTooltipError from "../InfoTooltip/InfoToolTipError";

import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loggedIn &&
      Promise.all([MainApi.getUserData(), MainApi.getSavedMovies()])
        .then(([res, movies]) => {
          setCurrentUser({
            name: res.data.name,
            email: res.data.email,
            _id: res.data._id,
          });

          setMovies(movies);
          navigate(location.pathname);
        })

        .catch((err) => {
          console.log(err);
        });
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          setEmail(data.data.email);
          setName(data.data.name);
          setId(data.data._id);
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          setEmail(data.data.email);
          setName(data.data.name);
          setId(data.data._id);
          setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate.location]);

  function handleRegistration(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setStatus(false);
        setInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setStatus(false);
        setInfoTooltipOpen(true);
        console.log(err);
      });
  }

  function handleClose() {
    setInfoTooltipOpen(false);
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchedMovies");
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

            <Route
              exact
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />

            <Route
              exact
              path="/signup"
              element={<Register handleRegistration={handleRegistration} />}
            />

            <Route
              exact
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={<Movies loggedIn={loggedIn} />}
                ></ProtectedRoute>
              }
            />

            <Route
              exact
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={<SavedMovies loggedIn={loggedIn} />}
                ></ProtectedRoute>
              }
            />

            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={
                    <Profile
                      setCurrentUser={setCurrentUser}
                      name={name}
                      email={email}
                      id={id}
                      loggedIn={loggedIn}
                      handleLogOut={handleLogOut}
                    />
                  }
                ></ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />

            <Route exact path="/" element={<Footer />} />
          </Routes>

          <InfoTooltipError
            isOpen={isInfoTooltipOpen}
            onClose={handleClose}
            status={status}
          />
        </CurrentMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
