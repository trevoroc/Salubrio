import React from 'react';
import { Route, Link } from 'react-router-dom';

import SplashHeader from './splash/splash_header';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute path="/" component={ SplashHeader } />
    <h1>Welcome to Salubrio</h1>
  </div>
);

export default App;
