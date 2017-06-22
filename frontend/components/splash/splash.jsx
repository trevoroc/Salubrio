import React from 'react';

import SplashHeaderContainer from './splash_header_container';
import renderAuthModal from './auth_modal';
import { AuthRoute } from '../../util/route_util';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SplashHeaderContainer />
        <AuthRoute path="/login" component={ renderAuthModal('login') } />
        <AuthRoute path="/signup" component={ renderAuthModal('signup') } />
      </div>
    );
  }
}

export default Splash;
