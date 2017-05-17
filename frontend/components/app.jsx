import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Welcome to Salubrio</h1>
    <AuthRoute exact path='/signup' component={ Auth } />
  </div>
);

export default App;
