import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from "../Header/Header";
import './App.css';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';

function App(loggedIn) {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Header loggedIn={loggedIn} />} />
      </Routes>
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
        <Route exact path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
