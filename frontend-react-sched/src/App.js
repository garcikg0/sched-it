import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import './index.css';
import WeeklyCal from './components/weeklyCal/WeeklyCal';
import LoginForm from './components/loginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  let history = useHistory();

  const handleLogin = ( user ) => {
    setCurrentUser( user )
    history.pushState('/home')
  };

  return (
    <>
    <Switch>
      <Route path='/login' exact>
        <LoginForm handleLogin={handleLogin} />
      </Route>
      <Route path='/signup' exact>
        <SignUpForm handleLogin={handleLogin} />
      </Route> 
      <Route path='/home' exact>
      <div class="container">
      <div class="side-bar"> SIDE BAR </div>
      <div class="weekly-cal-container">
        <WeeklyCal />
      </div>
      <div class="personal-to-do">PERSONAL TO DO</div>   
      <div class="work-to-do">WORK TO DO</div>
      <div class="post-it">POST IT</div>
    </div>
      </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
