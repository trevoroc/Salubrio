import React from 'react';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <section>
        <h2>Activity Feed</h2>
        <br></br>
        <button onClick={ this.handleLogout }>Log Out</button>
      </section>
    );
  }
}

export default ActivityFeed;
