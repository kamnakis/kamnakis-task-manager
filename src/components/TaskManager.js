import React from 'react';
import { HashRouter, Switch } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Demo from './Demo'
import NotFound from './NotFound'

const TaskManager = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <PublicRoute exact path='/' component={Home}  />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path='/signup' component={Signup} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <PublicRoute exact path='/demo' component={Demo} />
        <PublicRoute exact component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default TaskManager;
