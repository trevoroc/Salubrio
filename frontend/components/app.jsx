import React from 'react';
import { Route, Link } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './sessions/auth_form_container';

const App = () => (
  <div>
    <h1>Welcome to Salubrio</h1>
    <AuthRoute exact path="/signup" component={ AuthFormContainer } />
    <AuthRoute exact path="/login" component={ AuthFormContainer } />
    <Link to="/signup">Sign Up</Link>
    <br></br>
    <Link to="/login">Log In</Link>
  </div>
);

export default App;
