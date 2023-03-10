import './App.css'
import { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
function App() {
  const [isLoggedIn,updateIsLoggedIn] = useState(false);
  const loginHandler = (email,password) =>{
    updateIsLoggedIn(true);
  }
  const logoutHandler=() =>{
    updateIsLoggedIn(false);
  }
  return (
    <>
      <MainHeader  />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
);
  
}

export default App
