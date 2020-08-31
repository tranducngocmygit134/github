import React from 'react';
import {
  AuthWrapper,
  Dashboard,
  Error,
  Login,
  PrivateRoute,
} from './pages/index';
import { Switch, Route } from 'react-router-dom';
import './index.scss';

function App() {
  return (
    <AuthWrapper>
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </AuthWrapper>
  );
}

export default App;
