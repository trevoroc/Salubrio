import React from 'react';

import WorkoutListContainer from '../workouts/workout_list_container';
import NavBarContainer from '../navbar/nav_bar_container';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchWorkouts(); // TODO: Add logic to handle user-specific vs. general
  }

  render() {
    return (
      <section className="feed">
        <NavBarContainer username={ this.props.username }/>
        <br></br>
        <h2>Activity Feed</h2>
        <br></br>
        <WorkoutListContainer />
      </section>
    );
  }
}

export default ActivityFeed;
