import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ActivityFeedContainer from './feed/activity_feed_container';
import RouteFormContainer from './routes/route_form_container';
import WorkoutFormPage from './workouts/workout_form_page';

const App = () => (
  <div>
    <AuthRoute path="/" component={ Splash } />
    <ProtectedRoute exact path="/feed" component={ ActivityFeedContainer } />
    <ProtectedRoute exact path="/newroute" component={ RouteFormContainer } />
    <ProtectedRoute exact path="/newworkout"
      component={ WorkoutFormPage } />
  </div>
);

export default App;
