import React from 'react';
import { Route, Link } from 'react-router-dom';

import SplashHeader from './splash/splash_header';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ActivityFeedContainer from './feed/activity_feed_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={ SplashHeader } />
    <h1>Welcome to Salubrio</h1>
    <ProtectedRoute exact path="/feed" component={ ActivityFeedContainer } />
  </div>
);

export default App;
