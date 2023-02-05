import React from 'react'
import './App.css';
import { Routes , Route } from 'react-router-dom';
import CardsCharacters from './components/cardsCharacters/cardsCharacters';
import WorldCards from './components/worldCards/worldCards';
import Login from './components/home/home';
import About from './components/about/about'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  // const [token, setToken] = React.useState();
  const token = getToken

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>

      <Routes className="app">
          <Route exact path={'/'} element={<CardsCharacters/>}/>
          <Route exact path={'/characters'} element={<CardsCharacters/>} />
          <Route exact path={'/worlds'} element={<WorldCards />} />
          <Route exact path={'/about'} element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
