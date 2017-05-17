import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './sessions/auth_form_container';

const App = () => (
  <div>
    <h1>Welcome to Salubrio</h1>
    <AuthRoute exact path='/signup' component={ AuthFormContainer } />
  </div>
);

export default App;
