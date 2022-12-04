import Main from '../Main/Main';
import Header from "../Header/Header";

import './App.css';

function App(loggedIn) {
  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <Main />
    </div>
  );
}

export default App;
