import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import './index.css';
import WeeklyCal from './components/weeklyCal/WeeklyCal';
import LoginForm from './components/loginForm/LoginForm';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <LoginForm />
    <Switch>
      <Route path='/home' exact>
      <div class="container">
      <div class="side-bar"> SIDE BAR </div>
      <div class="weekly-cal-container">
        <WeeklyCal />
      </div>
      {/* just trying to fix */}

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
