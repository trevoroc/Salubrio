import React from 'react';

import WorkoutListItem from './workout_list_item';

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
  }

  buildWorkoutItems() {
    const workoutIds = Object.keys(this.props.workouts);
    return workoutIds.map(id => (
      <li>
        <WorkoutListItem key={ id } workout={ this.props.workouts[id] } />
      </li>
    ));
  }

  render() {
    const workoutItems = this.buildWorkoutItems();
    return (
      <ul>
        { workoutItems }
      </ul>
    );
  }
}

export default WorkoutList;
