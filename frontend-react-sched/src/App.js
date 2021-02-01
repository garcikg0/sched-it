import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import './index.css';
import WeeklyCal from './components/weeklyCal/WeeklyCal';
import LoginForm from './components/loginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import NavBar from './components/navBar/NavBar'
import HomePage from './components/homePage/HomePage'

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:3000/autologin`, {
        header: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(r=>r.json())
      .then(data => {
        if (!data.error) {
          handleLogin(data)
        }
      })
    }
  }, []);

  const handleLogin = ( user ) => {
    setCurrentUser( user )
    history.push('/home')
  };

  const handleLogout = () => {
    localStorage.removeItem("token")
    setCurrentUser(null)
    history.push('/login')
  }

  return (
    <>
    <Switch>
      <Route path='/' >
        <HomePage />
      </Route>
      <Route path='/login' exact>
        <LoginForm handleLogin={handleLogin} />
      </Route>
      <Route path='/signup' exact>
        <SignUpForm handleLogin={handleLogin} />
      </Route> 
      <Route path='/home' exact>
        {currentUser ? 
        <>
        <NavBar currentUser={currentUser} handleLogout={handleLogout} />
        <div class="container">
        <div class="side-bar"> SIDE BAR </div>
        <div class="weekly-cal-container">
          <WeeklyCal />
        </div>
        <div class="personal-to-do">PERSONAL TO DO</div>   
        <div class="work-to-do">WORK TO DO</div>
        <div class="post-it">POST IT</div>
        </div>
        </> : 
        <Redirect to='/login' />
        } 
      </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
