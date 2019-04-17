import React from 'react';
import { Switch, Route } from 'react-router-dom';

import coverImage from '../../assets/auth-cover.jpg';
import Login from './Login';
import Register from './Register';

import './styles.scss';

const Auth = () => (
  <div className="auth">
    <img
      src={coverImage}
      alt="cover" />
    <div className="auth-container">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
      </Switch>
    </div>
  </div>
);

export default Auth;
