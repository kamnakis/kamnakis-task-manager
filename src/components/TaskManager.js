import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'

const TaskManager = () => {
  return (
    <HashRouter basename="/">
      <h1 className="text-red-500">Task Manager</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default TaskManager;
