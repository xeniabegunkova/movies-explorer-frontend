import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from "../Header/Header";
import './App.css';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Error from '../Error/Error';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>

      <Routes>
        <Route exact path="/signin" element={<Login />} />
      </Routes>

      <Routes>
        <Route exact path="/signup" element={<Register />} />
      </Routes>
      
      <Routes>
        <Route exact path="/movies" element={<Movies />} />
      </Routes>

      <Routes>
        <Route exact path="/saved-movies" element={<SavedMovies />} />
      </Routes>

      <Routes>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>

      <Routes>
        <Route exact path="/error" element={<Error />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
