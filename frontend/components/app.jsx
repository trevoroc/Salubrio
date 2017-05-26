import React from 'react';
import { Route, Link } from 'react-router-dom';

import SplashHeaderContainer from './splash/splash_header_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ActivityFeedContainer from './feed/activity_feed_container';
import RouteFormContainer from './routes/route_form_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={ SplashHeaderContainer } />
    <ProtectedRoute exact path="/feed" component={ ActivityFeedContainer } />
    <ProtectedRoute exact path="/newroute" component={ RouteFormContainer } />
  </div>
);

export default App;
