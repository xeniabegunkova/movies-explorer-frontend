import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from "../Header/Header";
import './App.css';
import Footer from '../Footer/Footer';

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
        <Route exact path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
