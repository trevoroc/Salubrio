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
      <div className="splash">
        <SplashHeaderContainer />
        <section className="splash-banner">
          <img src="/splash-banner-3.png" />
        </section>
        <article className="tagline">
          <p className="syllables">sa·lu·bri·ous</p>
          <p className="pronunciation">/səˈlo͞obrēəs/</p>
          <p className="part-of-speech">adjective</p>
          <p className="definition">health-giving; healthy</p>
        </article>
        <AuthRoute path="/login" component={ renderAuthModal('login') } />
        <AuthRoute path="/signup" component={ renderAuthModal('signup') } />
      </div>
    );
  }
}

export default Splash;
