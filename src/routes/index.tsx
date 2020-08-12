import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';

import Profile from '../Pages/Profile';
import Dashboard from '../Pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
